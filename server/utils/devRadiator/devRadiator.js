/* eslint-disable */
const schedule = require('node-schedule')
const axios = require('axios')
const chalk = require('chalk')
const moment = require('moment')

const {
  goals,
  messagesText
} = require('./config.js')
const { getCoverageMessage } = require('./utils/Coverage')
const { getEslintReport } = require('./utils/EslintReport')
const { getDeploysCount } = require('./utils/DeploysCount')
const { getPageSpeedMetric } = require('./utils/PageSpeed')
const { getGoalSuccessMessage } = require('./helpers/getGoalSuccessMessage')
const {
  DEV_RADIATOR_SLACK_WEBHOOK,
  DEV_RADIATOR_COLLECT_DATA_CRON_STRING,
  DEV_RADIATOR_SEND_MESSAGE_CRON_STRING,
  DEV_RADIATOR_MONGO
} = require('../../config')
const Metrics = require('./models/Metrics')
const mongoose = require('mongoose')

class DevRadiator {

  scheduleCollectMetrics() {
    schedule.scheduleJob(DEV_RADIATOR_COLLECT_DATA_CRON_STRING, () => {
      this.collectMetrics()
        .catch(console.log)
    })
  }

  scheduleSendMetrics() {
    schedule.scheduleJob(DEV_RADIATOR_SEND_MESSAGE_CRON_STRING, () => {
      this.sendMetricsToSlack()
        .catch(console.log)
    })
  }

  async sendToSlack(requestData) {
    try {
      await axios.post(DEV_RADIATOR_SLACK_WEBHOOK, requestData)
      console.log(messagesText.successSend)
    } catch (e) {
      console.log(e)
    }
  }

  createMessage(text, value, goal, description = '') {
    const goalSuccess = getGoalSuccessMessage(value, goal)
    return goalSuccess.emoji + `   ${text}: ${value} ${description}` + goalSuccess.message
  }

  createMessageBlock(type, text = '') {
    if (text === '') {
      return { type }
    }
    if (type === 'header') {
      return {
        type,
        text: {
          type: 'plain_text',
          text,
        },
      }
    }
    return {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text,
      },
    }
  }

  compareResults(newResults, oldResults) {
    const comparedResults = {
      pageSpeed: {
        mobile: {
          old: 0,
          new: 0
        },
        desktop: {
          old: 0,
          new: 0
        },
        pages: {}
      },
      coverage: {
        old: 0,
        new: 0
      },
    }

    comparedResults.coverage.old = parseFloat((oldResults.reduce((acc, result) => {
      return acc + result.coverage.total
    }, 0) / oldResults.length).toFixed(2))

    comparedResults.coverage.new = parseFloat((newResults.reduce((acc, result) => {
      return acc + result.coverage.total
    }, 0) / newResults.length).toFixed(2))

    comparedResults.pageSpeed.desktop.old = parseFloat((oldResults.reduce((averagePerWeek, result) => {
      return averagePerWeek + result.pageSpeed.desktop.reduce((averagePerDay, metric) => {
        return averagePerDay + metric.total
      }, 0) / result.pageSpeed.desktop.length
    }, 0) / oldResults.length).toFixed(2))

    comparedResults.pageSpeed.desktop.new = parseFloat((newResults.reduce((averagePerWeek, result) => {
      return averagePerWeek + result.pageSpeed.desktop.reduce((averagePerDay, metric) => {
        return averagePerDay + metric.total
      }, 0) / result.pageSpeed.desktop.length
    }, 0) / newResults.length).toFixed(2))

    comparedResults.pageSpeed.mobile.old = parseFloat((oldResults.reduce((averagePerWeek, result) => {
      return averagePerWeek + result.pageSpeed.mobile.reduce((averagePerDay, metric) => {
        return averagePerDay + metric.total
      }, 0) / result.pageSpeed.mobile.length
    }, 0) / oldResults.length).toFixed(2))

    comparedResults.pageSpeed.mobile.new = parseFloat((newResults.reduce((averagePerWeek, result) => {
      return averagePerWeek + result.pageSpeed.mobile.reduce((averagePerDay, metric) => {
        return averagePerDay + metric.total
      }, 0) / result.pageSpeed.mobile.length
    }, 0) / newResults.length).toFixed(2))

    return comparedResults
  }

  async collectMetrics() {
    const mongoConnection = await mongoose.connect(DEV_RADIATOR_MONGO)
    if (mongoConnection) {
      console.log('MongoDB connected to MONGO')

      const coverageData = await getCoverageMessage()
      const deploysCount = await getDeploysCount()
      const eslintErrorsCount = await getEslintReport()
      const pageSpeedMetricDesktop = await getPageSpeedMetric('desktop')
      console.log(pageSpeedMetricDesktop)
      const pageSpeedMetricMobile = await getPageSpeedMetric('mobile')
      console.log(pageSpeedMetricMobile)
      const metrics = new Metrics({
        pageSpeed: {
          desktop: pageSpeedMetricDesktop,
          mobile: pageSpeedMetricMobile,
        },
        coverage: coverageData,
        deploys: deploysCount,
        eslintErrors: eslintErrorsCount,
      })
      await metrics.save()
      console.log(chalk.hex('#4cff00')
        .bold('Data Saved to MongoDB'))
    }
    await mongoConnection.disconnect()
    console.log('MongoDB connection closed')
  }

  async getMetricsFromDB() {

    const metrics = {}

    const mongoConnection = await mongoose.connect(DEV_RADIATOR_MONGO)
    console.log('MongoDB connected to MONGO')

    const prevWeekFirstDay = moment()
      .weekday(-6)
      .startOf('day')

    const prevWeekLastDay = moment()
      .weekday(0)
      .endOf('day')

    console.log(chalk.hex('#2fd0ff')(`Get data from DB between ${prevWeekFirstDay.format('Do YYYY, h:mm:ss a')} and ${prevWeekLastDay.format('Do YYYY, h:mm:ss a')}`))

    const prevWeekMetrics = await Metrics.find({
      created_at: {
        $gte: prevWeekFirstDay.toISOString(),
        $lt: prevWeekLastDay.toISOString()
      }
    })
      .sort({ created_at: -1 })

    console.log('количество метрик за прошлую неделю: ', prevWeekMetrics.length)

    const currentWeekFirstDay = moment()
      .weekday(1)
      .startOf('day')

    const currentWeekLastDay = moment()
      .weekday(7)
      .endOf('day')

    console.log(chalk.hex('#2fd0ff')(`Get data from DB between ${currentWeekFirstDay.format('Do YYYY, h:mm:ss a')} and ${currentWeekLastDay.format('Do YYYY, h:mm:ss a')}`))

    const currentWeekMetrics = await Metrics.find({
      created_at: {
        $gte: currentWeekFirstDay.toISOString(),
        $lt: currentWeekLastDay.toISOString()
      }
    })
      .sort({ created_at: -1 })

    console.log('количество метрик за эту неделю: ', currentWeekMetrics.length)


    const reportMetrics = (await Metrics.find({
      created_at: {
        $gte: currentWeekFirstDay.toISOString(),
        $lt: currentWeekLastDay.toISOString()
      }
    })
      .sort({ created_at: -1 })
      .limit(1))

    console.log(chalk.hex('#2fd0ff')('end of request query'))
    await mongoConnection.disconnect()
    console.log('MongoDB connection closed')

    const comparedData = await this.compareResults(currentWeekMetrics, prevWeekMetrics)
    return reportMetrics
  }

  async sendMetricsToSlack() {
    console.log(messagesText.run)
    const metrics = await this.getMetricsFromDB()

    console.log(metrics)

    // const pageSpeedDesktopDescription = `:computer:\n Pages: ${metrics.pageSpeedMetricDesktop.pages.map(page => `<${page.page.url}|${page.page.text}> (${page.average}) `)
    //   .join('')}`
    // const pageSpeedMobileDescription = `:iphone:\n Pages: ${metrics.pageSpeedMetricMobile.pages.map(page => `<${page.page.url}|${page.page.text}> (${page.average}) `)
    //   .join('')}`

    // const requestData = {
    //   title: 'Dev Radiator:',
    //   blocks: [
    //     this.createMessageBlock('header', 'Отчет радиатора по исполнению целей команды разработчиков проекта маркетинг'),
    //     this.createMessageBlock('divider'),
    //     this.createMessageBlock('section', this.createMessage('Coverage', metrics.coverageData.total, goals.coverage.total, '(total)')),
    //     this.createMessageBlock('section', this.createMessage('Branches', metrics.coverageData.branches, goals.coverage.branches)),
    //     this.createMessageBlock('section', this.createMessage('Functions', metrics.coverageData.functions, goals.coverage.functions)),
    //     this.createMessageBlock('section', this.createMessage('Lines', metrics.coverageData.lines, goals.coverage.lines)),
    //     this.createMessageBlock('section', this.createMessage('Statements', metrics.coverageData.statements, goals.coverage.statements)),
    //     this.createMessageBlock('divider'),
    //     this.createMessageBlock('section', this.createMessage('Deploys count', metrics.deploysCount, goals.deploys)),
    //     this.createMessageBlock('divider'),
    //     this.createMessageBlock('section', this.createMessage('Eslint errors count', metrics.eslintErrorsCount, goals.eslint)),
    //     this.createMessageBlock('divider'),
    //     this.createMessageBlock('section', this.createMessage('Desktop total performance', metrics.pageSpeedMetricDesktop.total, goals.performanceDesktop, pageSpeedDesktopDescription)),
    //     this.createMessageBlock('divider'),
    //     this.createMessageBlock('section', this.createMessage('Mobile total performance', metrics.pageSpeedMetricMobile.total, goals.performanceMobile, pageSpeedMobileDescription)),
    //   ],
    // }

    // await this.sendToSlack(requestData)
  }
}

module.exports = { DevRadiator }

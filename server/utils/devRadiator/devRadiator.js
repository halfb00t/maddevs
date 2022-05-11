/* eslint-disable */
const schedule = require('node-schedule')
const axios = require('axios')
const { goals, messagesText } = require('./config.js')
const { getCoverageMessage } = require('./utils/Coverage')
const { getEslintReport } = require('./utils/EslintReport')
const { getDeploysCount } = require('./utils/DeploysCount')
const { getGoalSuccessMessage } = require('./helpers/getGoalSuccessMessage')
const { RADIATOR_SLACK_WEBHOOK, RADIATOR_CRON_STRING  } = require('../../config')


class DevRadiator {

  schedule() {
    schedule.scheduleJob(RADIATOR_CRON_STRING, () => {
      this.run().catch(console.log)
    })
  }

  async sendToSlack(requestData) {
    try {
      await axios.post(RADIATOR_SLACK_WEBHOOK, requestData)
      console.log(messagesText.successSend)
    } catch (e) {
      console.log(e)
    }
  }

  createMessage(text, value, goal, description = '') {
    const goalSuccess = getGoalSuccessMessage(value, goal)
    return goalSuccess.emoji + `   ${text}: ${value} ${description}` + goalSuccess.message
  }


  async run() {
    console.log(messagesText.run)

    const coverageData = await getCoverageMessage()
    const deploysCount = await getDeploysCount()
    const eslintErrorsCount = await getEslintReport()
    const requestData = {
      title: 'Dev Radiator:',
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "Отчет радиатора по исполнению целей команды разработчиков проекта маркетинг",
            emoji: true
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Coverage', coverageData.total, goals.coverage.total, '(total)')
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Branches', coverageData.branches, goals.coverage.branches)
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Functions', coverageData.functions, goals.coverage.functions)
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Lines', coverageData.lines, goals.coverage.lines)
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Statements', coverageData.statements, goals.coverage.statements)
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Deploys count', deploysCount, goals.deploys)
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: this.createMessage('Eslint errors count', eslintErrorsCount, goals.eslint)
          }
        },
      ],
    }
    await this.sendToSlack(requestData)
  }
}

module.exports = { DevRadiator }


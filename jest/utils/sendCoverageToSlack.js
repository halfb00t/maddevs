const axios = require('axios')
const { readFile } = require('fs')
const chalk = require('chalk')
const { findArgument, getColor } = require('.')
require('dotenv').config()

const messages = {
  emptyEnv: 'Please add a slack webhookUrl in var NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL on your .env file',
  getErrorText: failed => `<!here> Just a quick heads up, *${failed}* tests have failed :(
  Please take a look.`,
  passedText: 'All tests have passed',
}

function getTotalCoveragePercentage(percentages) {
  const sumPercentages = percentages.reduce((acc, curr) => Number(acc) + Number(curr))
  return Number(sumPercentages / percentages.length).toFixed(2)
}

function createMessage(vars) {
  const totalCoveragePercentage = getTotalCoveragePercentage([
    vars.statements.coverage,
    vars.branches.coverage,
    vars.lines.coverage,
    vars.functions.coverage,
  ])

  const message = {
    text: messages.passedText,
    attachments: [
      {
        text: `*Total coverage percentage*: ${totalCoveragePercentage}%`,
        color: getColor(totalCoveragePercentage, 'hash'),
      },
      {
        text: `Statements: ${vars.statements.coverage}%`,
        color: vars.statements.color,
      },
      {
        text: `Branches: ${vars.branches.coverage}%`,
        color: vars.branches.color,
      },
      {
        text: `Lines: ${vars.lines.coverage}%`,
        color: vars.lines.color,
      },
      {
        text: `Functions: ${vars.functions.coverage}%`,
        color: vars.functions.color,
      },
    ],
  }
  return message
}

function sendMessageToSlack(reportResults, webhookUrl) {
  const resultMessage = createMessage(reportResults)
  axios.post(webhookUrl, {
    text: resultMessage.text,
    attachments: resultMessage.attachments,
  }, {
    mrkdwn: true,
  }).then(() => {
    // eslint-disable-next-line no-console
    console.log(chalk.green('Message sent to Slack'))
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.log(chalk.red(error))
    process.exit(1)
  })
}

function readCoverageReport(data) {
  const report = JSON.parse(data)

  const results = ['lines', 'statements', 'functions', 'branches']
    .map(key => {
      if (!(report && report.total && report.total[key])) throw new Error('malformed coverage report')

      const coverage = report.total[key].pct
      const color = getColor(coverage, 'hash')

      return [key, { coverage, color }]
    })
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    )

  return results
}

function sendCoverageToSlack() {
  const webhookUrl = process.env.NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL
  if (!webhookUrl) throw new Error(messages.emptyEnv)

  const inputPath = findArgument('input', './coverage/coverage-summary.json')

  readFile(`${inputPath}`, 'utf8', (err, data) => {
    if (err) throw err
    const reportResults = readCoverageReport(data)
    sendMessageToSlack(reportResults, webhookUrl)
    return reportResults
  })
}

sendCoverageToSlack()

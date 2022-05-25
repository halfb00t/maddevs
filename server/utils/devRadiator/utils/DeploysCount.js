const axios = require('axios')
const moment = require('moment')
const { DEV_RADIATOR_GH_TOKEN } = require('../../../config')

async function getDeploysCount() {
  const startOfWeek = moment().startOf('week')
  const endOfWeek = moment().endOf('week')

  const ghPRsUrl = 'https://api.github.com/repos/maddevsio/maddevs/pulls?state=closed&base=master&head=staging&per_page=10'
  const { data: pullRequests } = await axios.get(ghPRsUrl, { headers: { Authorization: `token ${DEV_RADIATOR_GH_TOKEN}` } })

  const filtredPRs = pullRequests
    .map(pr => ({ title: pr.title, merged_at: pr.merged_at }))
    .filter(pr => moment(pr.merged_at).isBetween(startOfWeek, endOfWeek))

  return filtredPRs.length
}

module.exports = { getDeploysCount }

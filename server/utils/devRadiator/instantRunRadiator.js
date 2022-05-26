/* eslint-disable */
const { DevRadiator } = require('./devRadiator')

const radiator = new DevRadiator()
radiator.sendMetricsToSlack().catch(console.log)

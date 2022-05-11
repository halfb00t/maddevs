/* eslint-disable */
const { DevRadiator } = require('./devRadiator')

const radiator = new DevRadiator()
radiator.run().catch(error => console.log(error))

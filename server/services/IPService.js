const axios = require('axios')
const {
  IP_INFO_TOKEN, IP_BAN_LIST, IP_TEST_LIST, TEST_EMAIL,
} = require('../config/env')

async function getIpInfo() {
  const info = await axios.get(`https://ipinfo.io/json?token=${IP_INFO_TOKEN}`)

  return info.data
}

async function getLocation() {
  const fromAPI = await getIpInfo() || {}
  return {
    ip: fromAPI.ip || '-',
    country: fromAPI.country || '-',
    city: fromAPI.city || '-',
  }
}

function isBlockedIP(ip) {
  const banList = (IP_BAN_LIST || '').split(',')
  return banList.includes(ip)
}

function isTestIP(ip) {
  const banList = (IP_TEST_LIST || '').split(',')
  return { testIP: banList.includes(ip), testEmail: TEST_EMAIL || '' }
}

module.exports = {
  getLocation,
  isBlockedIP,
  isTestIP,
}

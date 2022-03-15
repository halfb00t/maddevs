const axios = require('axios')
const {
  IP_INFO_TOKEN, IP_BAN_LIST, IP_TEST_LIST, TEST_EMAIL,
} = require('../config/env')

async function getIpInfo() {
  const info = await axios.get(`https://ipinfo.io/json?token=${IP_INFO_TOKEN}`)

  return info.data
}

async function getIpInfoByIp(ip) {
  const info = await axios.get(`http://ip-api.com/json/${ip}`)

  return info.data
}

async function getLocation(ip) {
  const local = await getIpInfoByIp(ip) || {}
  const fromAPI = await getIpInfo() || {}

  console.log('local', local)
  console.log('fromAPI', fromAPI)
  console.log('getLocation', {
    ip: fromAPI.ip || local.query || '-',
    country: fromAPI.country || local.country || '-',
    city: fromAPI.city || local.city || '-',
  })

  return {
    ip: fromAPI.ip || local.query || '-',
    country: fromAPI.country || local.country || '-',
    city: fromAPI.city || local.city || '-',
  }
}

function getIPByRequest(req) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  /**
   * In several cases ip can be an array of ips separated with comma('92.38.148.60, 172.68.132.29')
   * To resolve this behavior we need to split an ip and get only the first element
   */
  console.log('ip by req', ip.split(',')[0])
  return ip.split(',')[0]
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
  getIpInfoByIp,
  getIPByRequest,
}

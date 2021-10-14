const { lookup } = require('geoip-lite')
const fetch = require('node-fetch')
const { IP_INFO_TOKEN, IP_BAN_LIST } = require('../config/env')

async function getIpInfo(ip) {
  const info = await fetch.default(`https://ipinfo.io/${ip}?token=${IP_INFO_TOKEN}`)
  return info.json()
}

function getIPByRequest(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress
}

async function getLocationByIP(ip) {
  const local = lookup(ip) || {}
  const fromAPI = await getIpInfo(ip) || {}

  return {
    country: fromAPI.country || local.country || '-',
    city: fromAPI.city || local.city || '-',
  }
}

function isBlockedIP(ip) {
  const banList = (IP_BAN_LIST || '').split(',')
  return banList.includes(ip)
}

module.exports = {
  getIPByRequest,
  getLocationByIP,
  isBlockedIP,
}

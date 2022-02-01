import pkg from 'geoip-lite'
import fetch from 'node-fetch'

import {
  IP_BAN_LIST,
  IP_INFO_TOKEN,
  IP_TEST_LIST,
  TEST_EMAIL,
} from '../config/env'

const { lookup } = pkg

export async function getIpInfo(ip) {
  const info = await fetch.default(`https://ipinfo.io/${ip}?token=${IP_INFO_TOKEN}`)

  return info.json()
}

export function getIPByRequest(req) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  /**
   * In several cases ip can be an array of ips separated with comma('92.38.148.60, 172.68.132.29')
   * To resolve this behavior we need to split an ip and get only the first element
   */
  return ip.split(',')[0]
}

export async function getLocationByIP(ip) {
  const local = lookup(ip) || {}
  const fromAPI = await getIpInfo(ip) || {}

  return {
    country: fromAPI.country || local.country || '-',
    city: fromAPI.city || local.city || '-',
  }
}

export function isBlockedIP(ip) {
  const banList = (IP_BAN_LIST || '').split(',')
  return banList.includes(ip)
}

export function isTestIP(ip) {
  const banList = (IP_TEST_LIST || '').split(',')
  return { testIP: banList.includes(ip), testEmail: TEST_EMAIL || '' }
}

/* eslint-disable */
const axios = require('axios')
const chalk = require('chalk')
const { GOOGLEAPIS_KEY, DEV_RADIATOR_PAGESPEED_MEASUREMENTS_COUNT } = require('../../../config')

const pageSpeedUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
const testedPages = [
  {
    text: 'Home',
    url: 'https://www.maddevs.io/',
  },
  {
    text: 'Blog',
    url: 'https://www.maddevs.io/blog/',
  },
  {
    text: 'Careers',
    url: 'https://www.maddevs.io/careers/',
  }
]

const getPageSpeedMetric = async (platform = 'desktop') => {
  if (platform === 'desktop') {
    console.log(chalk.hex('#A801E4')(`Started collecting metrics for ${platform}`))
  } else {
    console.log(chalk.hex('#01B7E4')
      (`Started collecting metrics for ${platform}`))
  }


  function buildSearchParams(url, platform) {
    const searchParams = []
    searchParams.push(['url', url])
    searchParams.push(['key', GOOGLEAPIS_KEY])
    searchParams.push(['category', 'performance'])
    searchParams.push(['strategy', platform])
    return searchParams.map(arr => arr.join('='))
      .join('&')
  }


  const allPagesMetric = []
  const measureCount = DEV_RADIATOR_PAGESPEED_MEASUREMENTS_COUNT || 3 //default value if
  for (const page of testedPages) {
    const pageMetrics = {
      name: page.text,
      url: page.url,
      metrics: [],
      total: 0
    }
    for (let i = 0; i < measureCount; i++) {
      console.log(chalk.hex('#6134FD')
        (`Getting metrics for ${page.url} page`))
      const searchParams = buildSearchParams(page.url, platform)
      const { data } = await axios.get(`${pageSpeedUrl}?${searchParams}`)
      pageMetrics.metrics.push(Math.ceil(
        data.lighthouseResult.categories.performance.score * 100)
      )
      console.log(chalk.hex('#faff5c')('Success'))
    }
    pageMetrics.total = Math.ceil(Math.max(...pageMetrics.metrics))
    allPagesMetric.push(pageMetrics)
  }

  return allPagesMetric
}

module.exports = { getPageSpeedMetric }

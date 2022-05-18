/* eslint-disable */
const axios = require('axios')
const chalk = require('chalk')
const { GOOGLEAPIS_KEY } = require('../../../config')

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

const getPageSpeedMetric = async (platform) => {
  if (platform === 'desktop') {
    console.log(chalk.hex('#A801E4').bold(`Started collecting metrics for ${platform}`))
  } else {
    console.log(chalk.hex('#01B7E4').bold(`Started collecting metrics for ${platform}`))
  }

  const totalPerformance = {
    total: 0,
    pages: [],
  }

  function buildSearchParams(url, platform) {
    const searchParams = []
    searchParams.push(['url', url])
    searchParams.push(['key', GOOGLEAPIS_KEY])
    searchParams.push(['category', 'performance'])
    searchParams.push(['strategy', platform])
    return searchParams.map(arr => arr.join('=')).join('&')
  }

  function buildUrlResult(data, page) {
    const metrics = Object.values(data.lighthouseResult.categories).reduce(
      (acc, curr) => ({
        ...acc,
        [curr.id.replace('-', '_')]: Math.round(curr.score * 100),
      }),
      {},
    )

    const total = Object.values(metrics).reduce((acc, curr) => acc + curr, 0)
    const average = Math.round(total / Object.keys(metrics).length)

    return {
      page,
      metrics,
      average,
    }
  }

  const urlResult = []

  for (const page of testedPages) {
    console.log(chalk.hex('#6134FD').bold(`Getting metrics for ${page.url} page`))
    const searchParams = buildSearchParams(page.url, platform)
    const { data } = await axios.get(`${pageSpeedUrl}?${searchParams}`)
    urlResult.push(buildUrlResult(data, page))
    console.log(chalk.green.bold('Success'))
  }

  urlResult.forEach(page => {
    totalPerformance.pages.push(page)
  })

  totalPerformance.total = Math.ceil(urlResult.reduce((acc, curr) => acc + curr.average, 0) / urlResult.length)

  return totalPerformance
}

module.exports = { getPageSpeedMetric }

const axios = require('axios')

const path = 'https://maddevsio.s3.eu-west-1.amazonaws.com/coverage-badges/'
const fields = ['branches', 'functions', 'lines', 'statements']

function getStatFromSVG(svg) {
  const regex = /<text.*>(.+?)<\/text>/
  return parseFloat(svg.match(regex)[1], 10)
}

function getTotalCoverage(coverage) {
  return parseFloat((Object.keys(coverage).reduce((acc, stat) => coverage[stat] + acc, 0)) / Object.keys(coverage).length, 10)
}

async function getCoverage() {
  const coverage = {}
  for (const field of fields) {
    // eslint-disable-next-line
    const {data} = await axios.get(`${path}badge-${field}.svg`)
    coverage[field] = getStatFromSVG(data)
  }
  coverage.total = getTotalCoverage(coverage)
  return coverage
}

async function getCoverageMessage() {
  const coverage = await getCoverage()
  const coverageData = {}
  Object.keys(coverage).forEach(stat => {
    coverageData[stat] = coverage[stat]
  })
  return coverageData
}

module.exports = { getCoverageMessage }

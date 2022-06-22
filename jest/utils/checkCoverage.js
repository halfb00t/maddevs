const {
  createReporter,
  checkCoverage,
  config,
} = require('istanbul-api')
const path = require('path')
const chalk = require('chalk')
const istanbulCoverage = require('istanbul-lib-coverage')
const coverageNode = require('../../coverage/server/coverage-final.json')
const coverageBrowser = require('../../coverage/client/coverage-final.json')

const codeRoot = path.resolve(__dirname, '../../')
const outputDir = path.resolve(codeRoot, 'coverage')

// ------- configs ------- //
const coverageThreshold = require('../configs/coverageThreshold.config')

// -------- Combining coverage reports -------- //
const map = istanbulCoverage.createCoverageMap()
map.merge(coverageBrowser)
map.merge(coverageNode)
const reporter = createReporter()

const summary = istanbulCoverage.createCoverageSummary()

map.files()
  .forEach(f => {
    const fc = map.fileCoverageFor(f)
    const s = fc.toSummary()
    summary.merge(s)
  })

reporter.addAll(['json', 'lcov', 'json-summary'])
reporter.write(map)

// -------- Checking coverage -------- //
function getConfig(overrides) {
  const cfg = config.loadObject({
    instrumentation: {
      root: codeRoot,
    },
    reporting: {
      dir: outputDir,
    },
  }, overrides)
  return cfg
}

const cfg = getConfig({
  ...coverageThreshold,
})

const options = {
  include: '**/coverage-final.json',
}

checkCoverage.run(cfg, options, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(err))
    process.exit(1)
  }
  // eslint-disable-next-line no-console
  console.log(chalk.green('Coverage check passed!\n'))

  // eslint-disable-next-line no-console
  console.log(chalk.green(`
    Coverage summary:

    Total coverage percentage: ${
  ((summary.lines.pct + summary.statements.pct + summary.branches.pct + summary.functions.pct) / 4).toFixed(2)
}%

    Lines: ${cfg.check.global.lines}% -> ${summary.lines.pct}%
    Statements: ${cfg.check.global.statements}% -> ${summary.statements.pct}%
    Branches: ${cfg.check.global.branches}% -> ${summary.branches.pct}%
    Functions: ${cfg.check.global.functions}% ->  ${summary.functions.pct}%\n
  `))
})

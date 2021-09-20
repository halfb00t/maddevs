const base = require('./base.config')

module.exports = {
  ...base,
  roots: ['./tests/unit'],
  coverageDirectory: '<rootDir>/coverage/client',
}

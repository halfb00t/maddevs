const envs = require('./env')

// json
const mainRedirects = require('./json/mainRedirects.json')
// const customerUniversityRedirects = require('./json/customer-university-redirects')
// const blogRedirects = require('./json/blog-redirects')
// const hrTagsRedirects = require('./json/hr-tags-redirects')
// const invalidLinksRedirects = require('./json/invalid-links-redirects')
// const careersRedirects = require('./json/careers-redirect')

const bodyParserJSONConfig = { limit: '5mb' }
const bodyParserURLEncodedConfig = { limit: '5mb', extended: true }

const mongoConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

const sentryConfig = {
  dsn: envs.SENTRY_DSN,
  tracesSampleRate: 0.25,
  environment: envs.NODE_ENV,
}

module.exports = {
  ...envs,
  bodyParserJSONConfig,
  bodyParserURLEncodedConfig,
  mongoConfig,
  mainRedirects,
  // customerUniversityRedirects,
  // blogRedirects,
  // hrTagsRedirects,
  // invalidLinksRedirects,
  // careersRedirects,
  sentryConfig,
}

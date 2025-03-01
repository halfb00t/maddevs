const express = require('express')
const cors = require('cors')

// sentry
const { configureSentry } = require('./sentry')

// mad radiator
const runRadiator = require('./radiator')

// custom middlewares
const applyXFrame = require('./middlewares/applyXFrame')
const redirectToValidLink = require('./middlewares/redirectToValidLink')
const redirectToRuCareerPostUrl = require('./middlewares/redirectToRuCareerPostUrl')
const redirectToCorrectUrl = require('./middlewares/redirectToCorrectUrl')
const redirectToCorrectBlogUrl = require('./middlewares/redirectToCorrectBlogUrl')
const redirectToCorrectAuthorUrl = require('./middlewares/redirectToCorrectAuthorUrl')
const redirectToCorrectSofwareTestingUrl = require('./middlewares/redirectToCorrectSoftwateTestingUrl')

// config
const config = require('./config')

// routers
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

// Dev Radiator
const { DevRadiator } = require('./utils/devRadiator/devRadiator')

function bootstrap() {
  const app = express()
  const Sentry = configureSentry(app)

  // Sentry handlers
  app.use(Sentry.Handlers.requestHandler())
  app.use(Sentry.Handlers.tracingHandler())

  // External middlewares
  app.use(cors())
  app.use(express.json(config.bodyParserJSONConfig))
  app.use(express.urlencoded(config.bodyParserURLEncodedConfig))

  // Enable trust proxy
  app.enable('trust proxy')

  // Custom middlewares
  app.use(applyXFrame)
  app.use(redirectToValidLink)
  app.use(redirectToCorrectUrl)
  app.use(redirectToRuCareerPostUrl)
  app.use(redirectToCorrectBlogUrl)
  app.use(redirectToCorrectAuthorUrl)
  app.use(redirectToCorrectSofwareTestingUrl)

  // Routers
  app.use(webRouter)
  app.use('/api', apiRouter)

  // Errors handler
  app.use(Sentry.Handlers.errorHandler())

  if (process.env.FF_ENVIRONMENT === 'production') {
    try {
      const radiator = new DevRadiator()
      // eslint-disable-next-line no-console
      console.log('Run Dev Radiator schedulers')
      radiator.scheduleCollectMetrics()
      radiator.scheduleSendMetrics()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  // Run the mad radiator
  try {
    runRadiator()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }

  return app
}

module.exports = bootstrap()

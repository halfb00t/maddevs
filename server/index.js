const express = require('express')
const cors = require('cors')

// sentry
const { configureSentry } = require('./sentry')

// radiator
const runRadiator = require('./radiator')

// custom middlewares
const applyXFrame = require('./middlewares/applyXFrame')
const redirectToValidLink = require('./middlewares/redirectToValidLink')
const redirectToRuCareerPostUrl = require('./middlewares/redirectToRuCareerPostUrl')
const redirectToPrismicUrl = require('./middlewares/redirectToPrismicUrl')
const redirectToCorrectUrl = require('./middlewares/redirectToCorrectUrl')
const redirectToCorrectBlogUrl = require('./middlewares/redirectToCorrectBlogUrl')
const redirectToCorrectAuthorUrl = require('./middlewares/redirectToCorrectAuthorUrl')
const redirectToCorrectSofwareTestingUrl = require('./middlewares/redirectToCorrectSoftwateTestingUrl')

// config
const config = require('./config')

// routers
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

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
  app.use(redirectToPrismicUrl)
  app.use(redirectToCorrectBlogUrl)
  app.use(redirectToCorrectAuthorUrl)
  app.use(redirectToCorrectSofwareTestingUrl)

  // Routers
  app.use(webRouter)
  app.use('/api', apiRouter)

  // Errors handler
  app.use(Sentry.Handlers.errorHandler())

  // radiator running
  runRadiator()

  return app
}

module.exports = bootstrap()

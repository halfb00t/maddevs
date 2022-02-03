import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// sentry
import { configureSentry } from './sentry'

// radiator
import runRadiator from './radiator'

// custom middlewares
import applyXFrame from './middlewares/applyXFrame'
import redirectToValidLink from './middlewares/redirectToValidLink'
import redirectToRuCareerPostUrl from './middlewares/redirectToRuCareerPostUrl'
import redirectToPrismicUrl from './middlewares/redirectToPrismicUrl'
import redirectToCorrectUrl from './middlewares/redirectToCorrectUrl'
import redirectToCorrectBlogUrl from './middlewares/redirectToCorrectBlogUrl'
import redirectToCorrectAuthorUrl from './middlewares/redirectToCorrectAuthorUrl'
import redirectToCorrectSoftwareTestingUrl from './middlewares/redirectToCorrectSoftwateTestingUrl'

// config
import config from './config'

// routers
import webRouter from './routes/web'
import apiRouter from './routes/api'

function bootstrap() {
  const app = express()
  const Sentry = configureSentry(app)

  // External middlewares
  app.use(cors())
  app.use(bodyParser.json(config.bodyParserJSONConfig))
  app.use(bodyParser.urlencoded(config.bodyParserURLEncodedConfig))

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
  app.use(redirectToCorrectSoftwareTestingUrl)

  // Routers
  app.use(webRouter)
  app.use('/api', apiRouter)

  if (process.env.NODE_ENV === 'production') {
    // Sentry handlers
    app.use(Sentry.Handlers.requestHandler())
    app.use(Sentry.Handlers.tracingHandler())

    // Errors handler
    app.use(Sentry.Handlers.errorHandler())

    // radiator running
    runRadiator()
  }

  return app
}

export default bootstrap()

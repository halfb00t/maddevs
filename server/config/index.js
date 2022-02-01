import envs, { SENTRY_DSN, NODE_ENV } from './env'
// json
import mainRedirects from './json/mainRedirects.json'

const bodyParserJSONConfig = { limit: '5mb' }
const bodyParserURLEncodedConfig = { limit: '5mb', extended: true }

const mongoConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

const sentryConfig = {
  dsn: SENTRY_DSN,
  tracesSampleRate: 0.25,
  environment: NODE_ENV,
}

export default {
  ...envs,
  bodyParserJSONConfig,
  bodyParserURLEncodedConfig,
  mongoConfig,
  mainRedirects,
  sentryConfig,
}

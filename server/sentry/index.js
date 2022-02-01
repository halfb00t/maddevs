import Sentry from '@sentry/node'
import config from '../config'

export function configureSentry() {
  Sentry.init(config.sentryConfig)
  return Sentry
}

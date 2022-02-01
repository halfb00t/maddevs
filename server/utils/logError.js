const Sentry = require('@sentry/node')

export function logError(error, message = '') {
  Sentry.captureException(error)
  // eslint-disable-next-line
  console.error(message, error)
}

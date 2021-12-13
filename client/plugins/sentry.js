import Vue from 'vue'
import { Integrations } from '@sentry/tracing'
import * as Sentry from '@sentry/vue'

if (process.env.environment !== 'development') {
  Sentry.init({
    Vue,
    dsn: process.env.sentryDsnFront,
    integrations: [new Integrations.BrowserTracing({
      tracingOrigins: ['maddevs.io'],
    })],
    tracesSampleRate: 0.02,
    ignoreErrors: [
      'ResizeObserver loop limit exceeded', // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded#comment86691361_49384120
      'ResizeObserver loop completed with undelivered notifications.', // ^
      'Non-Error promise rejection captured', // https://forum.sentry.io/t/unhandledrejection-non-error-promise-rejection-captured-with-value/14062/14
      'Non-Error exception captured', // ^
      // Prismic
      'Failed to init Prismic API, preventing app fatal error.',
      'TypeError: Network request failed.',
      'ChunkLoadError: Loading chunk',
      // Facebook borked
      'fb_xd_fragment',
      // [Safari] Error playing video with muted
      'AbortError: The operation was aborted.',
      // [Safari] Error PiP when scrolling page
      'The request is not triggered by a user activation.',
      // Video error
      'AbortError: The play() request was interrupted by a call to pause().',
    ],
    denyUrls: [
      // Intercom,
      /js\.intercomcdn\.com/i,
      /widget\.intercom\.io/i,
      // Prismic
      /SuperPuperTest\.cdn\.prismic\.io/i,
      // Facebook flakiness
      /graph\.facebook\.com/i,
      // Facebook blocked
      /connect\.facebook\.net\/en_US\/all\.js/i,
      // Google Tag Manager
      /(https?:\/\/www\.googletagmanager\.com)/i,
      // Google flakiness
      /\/(gtm|ga|analytics)\.js/i,
      /(https?:\/\/www\.google-analytics\.com)/,
      // Chrome extensions
      /extensions\//i,
      /^chrome:\/\//i,
      // Firefox extensions
      /^resource:\/\//i,
      // Other plugins
      /webappstoolbarba\.texthelp\.com\//i,
      /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
    ],
  })
}

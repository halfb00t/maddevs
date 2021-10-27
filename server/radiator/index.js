require('dotenv')
  .config()
const { Radiator } = require('@maddevs/mad-radiator')

function runRadiator() {
  const authConfig = {
    authType: process.env.RADIATOR_AUTH_TYPE,
    analyticsProjectId: process.env.RADIATOR_PROJECT_ID,
    analyticsPrivateKeyId: process.env.RADIATOR_PRIVATE_KEY_ID,
    analyticsPrivateKey: process.env.RADIATOR_PRIVATE_KEY,
    analyticsClientEmail: process.env.RADIATOR_CLIENT_EMAIL,
    analyticsClientId: process.env.RADIATOR_CLIENT_ID,
    analyticsAuthUrl: process.env.RADIATOR_AUTH_URI,
    analyticsTokenUri: process.env.RADIATOR_TOKEN_URI,
    analyticsProviderCertUrl: process.env.RADIATOR_PROVIDER_CERT_URL,
    analyticsClientCertUrl: process.env.RADIATOR_CLIENT_CERT_URL,
    googleapisKey: process.env.RADIATOR_GOOGLEAPIS_KEY,
    range: 'day',
    websiteUrl: 'https://maddevs.io',
  }

  const sentryConfig = {
    sentryDSN: process.env.sentryDSN,
    tracesSampleRate: 1.0,
  }

  const analyticsConfig = {
    analyticsViewId: '230523659',
    pagesPathForViewsAnalytics: [
      '/customer-university/',
      '/insights/blog/',
    ],
    analyticsConversions: [
      {
        name: 'Leads',
        emoji: 'zap',
        goals: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        name: 'Contacts',
        emoji: 'telephone_receiver',
        goals: [10, 11, 12, 13, 14, 15],
      },
      {
        name: 'Careers',
        emoji: 'briefcase',
        goals: [9],
      },
    ],
  }

  const weeklyAnalyticsConfig = {
    ...analyticsConfig,
    range: 'week',
    chart: {
      type: 'users',
      period: 30 * 6, // 6 month
    },
  }

  const dailyAnalyticsConfig = {
    ...analyticsConfig,
    range: 'day',
    chart: {
      type: 'users',
      period: 30 * 2, // 2 month
    },
  }

  const lighthouseConfig = {
    lighthouse: {
      // regular expression for skip blog and CU pages
      urlTestRegexp: '(\\/blog\\/)|(\\/customer-university\\/)[a-zA-Z0-9]{1}',
      topCount: 3,
      worstCount: 3,
    },
  }

  const telegramConfig = {
    telegramToken: process.env.RADIATOR_TELEGRAM_TOKEN,
    telegramChannelId: -1001428775098,
  }

  const weeklySlackConfig = {
    slackWebhookUrl: process.env.RADIATOR_WEBHOOK_URL,
    slackChannelId: 'mad-marketing',
  }

  const dailySlackConfig = {
    slackWebhookUrl: process.env.RADIATOR_WEBHOOK_URL,
    slackChannelId: 'general',
  }

  const weeklyScheduleConfig = {
    period: 'week',
    time: process.env.RADIATOR_WEEKLY_DISPATCH_TIME || 17,
    weekDay: 5,
  }

  const dailyScheduleConfig = {
    period: 'day',
    time: process.env.RADIATOR_DAILY_DISPATCH_TIME || 9,
  }

  const weeklyRadiator = new Radiator(authConfig)
  weeklyRadiator.useSentry(sentryConfig)
  weeklyRadiator.useAnalytics(weeklyAnalyticsConfig)
  weeklyRadiator.useLighthouse(lighthouseConfig)
  weeklyRadiator.useSlack(weeklySlackConfig)
  weeklyRadiator.useTelegram(telegramConfig)
  weeklyRadiator.scheduleJob(weeklyScheduleConfig)

  const dailyRadiator = new Radiator(authConfig)
  dailyRadiator.useSentry(sentryConfig)
  dailyRadiator.useAnalytics(dailyAnalyticsConfig)
  dailyRadiator.useLighthouse(lighthouseConfig)
  dailyRadiator.useSlack(dailySlackConfig)
  dailyRadiator.scheduleJob(dailyScheduleConfig)

  return {
    weeklyRadiator,
    dailyRadiator,
  }
}

module.exports = runRadiator

require('dotenv')
  .config()
const { Radiator } = require('@maddevs/mad-radiator')

function runRadiator() {
  const baseConfig = {
    clientId: process.env.RADIATOR_CLIENT_ID,
    clientSecret: process.env.RADIATOR_CLIENT_SECRET,
    redirectUri: process.env.RADIATOR_REDIRECT_URI,
    accessToken: process.env.RADIATOR_ACCESS_TOKEN,
    refreshToken: process.env.RADIATOR_REFRESH_TOKEN,
    googleapisKey: process.env.RADIATOR_GOOGLEAPIS_KEY,
    timeZone: process.env.TZ,
    websiteUrl: 'https://maddevs.io',
    range: 'day',
    retryAttempts: 2,
  }

  const dailyConfig = {
    ...baseConfig,
    range: 'day',
  }
  const weeklyConfig = {
    ...baseConfig,
    range: 'week',
  }

  const sentryConfig = {
    sentryDSN: process.env.sentryDSN,
    tracesSampleRate: 0.25,
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
  }

  const dailyAnalyticsConfig = {
    ...analyticsConfig,
    chart: {
      type: 'users',
      period: 30 * 2, // 2 month
    },
  }

  const lighthouseConfig = {
    urlTestRegexp: '(\\/blog\\/)|(\\/customer-university\\/)[a-zA-Z0-9]{1}',
    topCount: 3,
    worstCount: 3,
  }

  const telegramConfig = {
    telegramToken: process.env.RADIATOR_TELEGRAM_TOKEN,
    telegramChannelId: process.env.RADIATOR_TELEGRAM_CHANNEL_ID,
  }

  const weeklySlackConfig = {
    slackWebhookUrl: process.env.RADIATOR_WEBHOOK_URL,
    slackChannelId: process.env.RADIATOR_WEEKLY_SLACK_CHANNEL_ID,

  }

  const dailySlackConfig = {
    slackWebhookUrl: process.env.RADIATOR_WEBHOOK_URL,
    slackChannelId: process.env.RADIATOR_DAILY_SLACK_CHANNEL_ID,
  }

  const weeklyScheduleConfig = {
    period: 'week',
    time: process.env.RADIATOR_WEEKLY_DISPATCH_TIME || 17,
    weekDay: 5,
  }

  const dailyScheduleConfig = {
    period: 'day',
    time: process.env.RADIATOR_DAILY_DISPATCH_TIME || 10,
  }

  const weeklyRadiator = new Radiator(weeklyConfig)
  weeklyRadiator.useSentry(sentryConfig)
  weeklyRadiator.useAnalytics(weeklyAnalyticsConfig)
  weeklyRadiator.useLighthouse(lighthouseConfig)
  weeklyRadiator.useSlack(weeklySlackConfig)
  weeklyRadiator.useTelegram(telegramConfig)
  weeklyRadiator.scheduleJob(weeklyScheduleConfig)

  const dailyRadiator = new Radiator(dailyConfig)
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

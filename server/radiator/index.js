require('dotenv').config()
const { Radiator } = require('@maddevs/mad-radiator')

function runRadiator() {
  const baseConfig = {
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
    websiteUrl: 'https://maddevs.io',
    retryAttempts: 3,
  }
  const dailyConfig = {
    ...baseConfig,
    range: 'day',
  }
  const analyticsConfig = {
    pagesPathForViewsAnalytics: [
      '/customer-university/',
      '/blog/',
    ],
    chart: {
      chartView: 'bar',
      type: 'totalUsers',
      period: 90,
    },
    analyticsViewId: '294117887',
    analyticsConversions: [
      {
        name: 'Leads',
        emoji: 'zap',
        goals: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
        ],
      },
      {
        name: 'Contacts',
        emoji: 'telephone_receiver',
        goals: [
          10,
          11,
          12,
          13,
          14,
          15,
        ],
      },
      {
        name: 'Careers',
        emoji: 'briefcase',
        goals: [
          9,
        ],
      },
    ],
  }
  const slackConfig = {
    slackWebhookUrl: process.env.RADIATOR_SLACK_WEBHOOK_URL,
    slackChannelId: process.env.RADIATOR_SLACK_CHANNEL_ID,
  }
  const redditConfig = {
    redditClientId: process.env.RADIATOR_REDDIT_CLIENT_ID,
    redditClientSecret: process.env.RADIATOR_REDDIT_CLIENT_SECRET,
    redditUsername: process.env.RADIATOR_REDDIT_USERNAME,
    redditPassword: process.env.RADIATOR_REDDIT_PASSWORD,
  }
  const dailyScheduleConfig = {
    period: 'day',
    time: 10,
  }
  const firestoreId = process.env.RADIATOR_FIRESTORE_ID
  const quora = {
    quoraUserID: process.env.RADIATOR_QUORA_USER_ID,
  }
  const lighthouseConfig = {
    urlTestRegexp: '(\\/blog\\/)|(\\/customer-university\\/)|(\\/ru\\/)[a-zA-Z0-9]{1}',
    topCount: 3,
    worstCount: 3,
    sitemapUrl: 'sitemapindex.xml',
  }
  const pageAnalyticsConfig = {
    urlTestRegexp: '^((?!\\/blog).)*$',
    sitemapUrl: 'sitemapindex.xml',
  }
  const dailyRadiator = new Radiator(dailyConfig)

  dailyRadiator.useAnalytics(analyticsConfig)
  dailyRadiator.useRedditCountPosts(redditConfig)
  dailyRadiator.useQuoraService(quora, firestoreId)
  dailyRadiator.useNewPagesInSite(lighthouseConfig, firestoreId)
  dailyRadiator.usePageAnalytics(pageAnalyticsConfig, firestoreId)
  dailyRadiator.useSlack(slackConfig)
  dailyRadiator.scheduleJob(dailyScheduleConfig)

  return {
    dailyRadiator,
  }
}

module.exports = runRadiator

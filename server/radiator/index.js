import {
  MAD_RADIATOR_AUTH_TYPE,
  MAD_RADIATOR_AUTH_URI,
  MAD_RADIATOR_CLIENT_CERT_URL,
  MAD_RADIATOR_CLIENT_EMAIL,
  MAD_RADIATOR_CLIENT_ID,
  MAD_RADIATOR_GOOGLEAPIS_KEY,
  MAD_RADIATOR_PRIVATE_KEY,
  MAD_RADIATOR_PRIVATE_KEY_ID,
  MAD_RADIATOR_PROJECT_ID,
  MAD_RADIATOR_PROVIDER_CERT_URL,
  MAD_RADIATOR_TOKEN_URI,
  MAD_RADIATOR_SLACK_WEBHOOK_URL,
  MAD_RADIATOR_SLACK_CHANNEL_ID,
  MAD_RADIATOR_REDDIT_CLIENT_ID,
  MAD_RADIATOR_REDDIT_CLIENT_SECRET,
  MAD_RADIATOR_REDDIT_USER_NAME,
  MAD_RADIATOR_REDDIT_PASSWORD,
  MAD_RADIATOR_QUORA_USER_ID,
  MAD_RADIATOR_DAILY_DISPATCH_TIME,
  MAD_RADIATOR_FIRESTORE_AUTH_TYPE,
  MAD_RADIATOR_FIRESTORE_PROJECT_ID,
  MAD_RADIATOR_FIRESTORE_PRIVATE_KEY_ID,
  MAD_RADIATOR_FIRESTORE_CLIENT_EMAIL,
  MAD_RADIATOR_FIRESTORE_CLIENT_ID,
  MAD_RADIATOR_FIRESTORE_AUTH_URI,
  MAD_RADIATOR_FIRESTORE_TOKEN_URI,
  MAD_RADIATOR_FIRESTORE_AUTH_PROVIDER,
  MAD_RADIATOR_FIRESTORE_CLIENT_CERT_URL,
  MAD_RADIATOR_FIRESTORE_PRIVATE_KEY,
  MAD_RADIATOR_TOTAL_USERS_TO_ENJI_URL,
  NODE_ENV,
} from '../config'

const { Radiator } = require('@maddevs/mad-radiator')

function runRadiator() {
  const baseConfig = {
    authType: MAD_RADIATOR_AUTH_TYPE,
    analyticsProjectId: MAD_RADIATOR_PROJECT_ID,
    analyticsPrivateKeyId: MAD_RADIATOR_PRIVATE_KEY_ID,
    analyticsPrivateKey: MAD_RADIATOR_PRIVATE_KEY,
    analyticsClientEmail: MAD_RADIATOR_CLIENT_EMAIL,
    analyticsClientId: MAD_RADIATOR_CLIENT_ID,
    analyticsAuthUrl: MAD_RADIATOR_AUTH_URI,
    analyticsTokenUri: MAD_RADIATOR_TOKEN_URI,
    analyticsProviderCertUrl: MAD_RADIATOR_PROVIDER_CERT_URL,
    analyticsClientCertUrl: MAD_RADIATOR_CLIENT_CERT_URL,
    googleapisKey: MAD_RADIATOR_GOOGLEAPIS_KEY,
    websiteUrl: 'https://maddevs.io',
    retryAttempts: 3,
  }
  const dailyConfig = {
    ...baseConfig,
    range: 'day',
    nodeEnv: NODE_ENV,
  }

  const fireStore = {
    authType: MAD_RADIATOR_FIRESTORE_AUTH_TYPE,
    firestoreProjectId: MAD_RADIATOR_FIRESTORE_PROJECT_ID,
    firestorePrivateKeyId: MAD_RADIATOR_FIRESTORE_PRIVATE_KEY_ID,
    firestoreClientEmail: MAD_RADIATOR_FIRESTORE_CLIENT_EMAIL,
    firestoreClientId: MAD_RADIATOR_FIRESTORE_CLIENT_ID,
    firestoreAuthUri: MAD_RADIATOR_FIRESTORE_AUTH_URI,
    firestoreTokenUri: MAD_RADIATOR_FIRESTORE_TOKEN_URI,
    firestoreAuthProviderCertUrl: MAD_RADIATOR_FIRESTORE_AUTH_PROVIDER,
    firestoreClientCertUrl: MAD_RADIATOR_FIRESTORE_CLIENT_CERT_URL,
    firestorePrivateKey: MAD_RADIATOR_FIRESTORE_PRIVATE_KEY,
  }

  const analyticsConfig = {
    totalUsersToEnji: {
      url: MAD_RADIATOR_TOTAL_USERS_TO_ENJI_URL,
    },
    pagesPathForViewsAnalytics: [
      '/customer-university/',
      '/blog/',
    ],
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
    slackWebhookUrl: MAD_RADIATOR_SLACK_WEBHOOK_URL,
    slackChannelId: MAD_RADIATOR_SLACK_CHANNEL_ID,
  }
  const redditConfig = {
    redditClientId: MAD_RADIATOR_REDDIT_CLIENT_ID,
    redditClientSecret: MAD_RADIATOR_REDDIT_CLIENT_SECRET,
    redditUsername: MAD_RADIATOR_REDDIT_USER_NAME,
    redditPassword: MAD_RADIATOR_REDDIT_PASSWORD,
  }
  const dailyScheduleConfig = {
    period: 'day',
    time: MAD_RADIATOR_DAILY_DISPATCH_TIME || 9,
  }
  const quora = {
    quoraUserID: MAD_RADIATOR_QUORA_USER_ID,
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
  const glassdoor = {
    glassdoorUrl: 'https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm',
  }
  const dailyRadiator = new Radiator(dailyConfig)
  dailyRadiator.useAnalytics(analyticsConfig)
  dailyRadiator.useRedditCountPosts(redditConfig)
  dailyRadiator.useQuoraService(quora, fireStore)
  dailyRadiator.useNewPagesInSite(lighthouseConfig, fireStore)
  dailyRadiator.usePageAnalytics(pageAnalyticsConfig, fireStore)
  dailyRadiator.useGlassdoorService(glassdoor, fireStore)
  dailyRadiator.useSlack(slackConfig)
  dailyRadiator.scheduleJob(dailyScheduleConfig)

  return {
    dailyRadiator,
  }
}

module.exports = runRadiator

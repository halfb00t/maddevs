const dotenv = require('dotenv')

dotenv.config()

// Atlassian
const ATLASSIAN_TOKEN = process.env.NODE_ATLASSIAN_TOKEN
const ATLASSIAN_EMAIL = process.env.NODE_ATLASSIAN_EMAIL
const ATLASSIAN_AUTH_TOKEN = `${ATLASSIAN_EMAIL}:${ATLASSIAN_TOKEN}`
const ATLASSIAN_PROJECT_KEY = process.env.NODE_ATLASSIAN_PROJECT_KEY
const ATLASSIAN_API_URL = process.env.NODE_ATLASSIAN_API_URL
const ATLASSIAN_PROJECT_EBOOK_KEY = process.env.NODE_ATLASSIAN_EBOOK_PROJECT_KEY

// Send pulse
const SENDPULSE_API_KEY = process.env.NODE_SENDPULSE_API_KEY
const SENDPULSE_API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID
const SENDPULSE_TOKEN_STORAGE = '/tmp/'

// Huntflow
const HUNTFLOW_TOKEN = process.env.NODE_HUNTFLOW_TOKEN
const HUNTFLOW_API_URL = process.env.NODE_HUNTFLOW_API_URL
const HUNTFLOW_ACCOUNT_ID = process.env.NODE_HUNTFLOW_ACCOUNT_ID
const HUNTFLOW_RESERVE_VACANCY_ID = process.env.NODE_HUNTFLOW_RESERVE_VACANCY_ID

// Sentry
const SENTRY_DSN = process.env.NODE_SENTRY_DSN

// Other
const { NODE_ENV } = process.env

// S3
const S3_ACCESS_KEY_ID = process.env.NODE_S3_ACCESS_KEY_ID
const S3_SECRET_ACCESS_KEY = process.env.NODE_S3_SECRET_ACCESS_KEY

// IP
const IP_INFO_TOKEN = process.env.NODE_IP_INFO_TOKEN
const IP_BAN_LIST = process.env.NODE_IP_BAN_LIST
const IP_TEST_LIST = process.env.NODE_IP_TEST_LIST
const TEST_EMAIL = process.env.NODE_TEST_EMAIL

// Prismic
const PRISMIC_API = process.env.NODE_PRISMIC_API

// reCaptcha key
const RECAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY

module.exports = {
  ATLASSIAN_TOKEN,
  ATLASSIAN_EMAIL,
  ATLASSIAN_AUTH_TOKEN,
  ATLASSIAN_PROJECT_KEY,
  ATLASSIAN_API_URL,
  ATLASSIAN_PROJECT_EBOOK_KEY,
  SENDPULSE_API_USER_ID,
  SENDPULSE_API_KEY,
  SENDPULSE_TOKEN_STORAGE,
  HUNTFLOW_TOKEN,
  HUNTFLOW_API_URL,
  HUNTFLOW_ACCOUNT_ID,
  HUNTFLOW_RESERVE_VACANCY_ID,
  SENTRY_DSN,
  NODE_ENV,
  S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY,
  IP_INFO_TOKEN,
  IP_BAN_LIST,
  IP_TEST_LIST,
  TEST_EMAIL,
  PRISMIC_API,
  RECAPTCHA_KEY,
}

import dotenv from 'dotenv'

dotenv.config()

// Atlassian
export const ATLASSIAN_TOKEN = process.env.NODE_ATLASSIAN_TOKEN
export const ATLASSIAN_EMAIL = process.env.NODE_ATLASSIAN_EMAIL
export const ATLASSIAN_AUTH_TOKEN = `${ATLASSIAN_EMAIL}:${ATLASSIAN_TOKEN}`
export const ATLASSIAN_PROJECT_KEY = process.env.NODE_ATLASSIAN_PROJECT_KEY
export const ATLASSIAN_API_URL = process.env.NODE_ATLASSIAN_API_URL

// Send pulse
export const SENDPULSE_API_KEY = process.env.NODE_SENDPULSE_API_KEY
export const SENDPULSE_API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID
export const SENDPULSE_TOKEN_STORAGE = '/tmp/'

// Huntflow
export const HUNTFLOW_TOKEN = process.env.NODE_HUNTFLOW_TOKEN
export const HUNTFLOW_API_URL = process.env.NODE_HUNTFLOW_API_URL
export const HUNTFLOW_ACCOUNT_ID = process.env.NODE_HUNTFLOW_ACCOUNT_ID
export const HUNTFLOW_RESERVE_VACANCY_ID = process.env.NODE_HUNTFLOW_RESERVE_VACANCY_ID

// Sentry
export const SENTRY_DSN = process.env.NODE_SENTRY_DSN

// Other
export const { NODE_ENV } = process.env

// S3
export const S3_ACCESS_KEY_ID = process.env.NODE_S3_ACCESS_KEY_ID
export const S3_SECRET_ACCESS_KEY = process.env.NODE_S3_SECRET_ACCESS_KEY

// IP
export const IP_INFO_TOKEN = process.env.NODE_IP_INFO_TOKEN
export const IP_BAN_LIST = process.env.NODE_IP_BAN_LIST
export const IP_TEST_LIST = process.env.NODE_IP_TEST_LIST
export const TEST_EMAIL = process.env.NODE_TEST_EMAIL

// Prismic
export const PRISMIC_API = process.env.NODE_PRISMIC_API

// reCaptcha key
export const RECAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY

export default {
  ATLASSIAN_TOKEN,
  ATLASSIAN_EMAIL,
  ATLASSIAN_AUTH_TOKEN,
  ATLASSIAN_PROJECT_KEY,
  ATLASSIAN_API_URL,
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

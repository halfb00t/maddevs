import dotenv from 'dotenv'

dotenv.config()

export default (on, config) => {
  // Replace default baseUrl from cypress.json on NODE_CYPRESS_BASE_URL
  config.baseUrl = process.env.NODE_CYPRESS_BASE_URL

  return config
}

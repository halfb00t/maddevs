const axios = require('axios')
const { RECAPTCHA_KEY } = require('../config/env')

async function reCaptchaVerification(token) {
  try {
    return await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_KEY}&response=${token}`)
  } catch (e) {
    console.log('ReCaptcha error:', e)
    return e
  }
}

module.exports = { reCaptchaVerification }

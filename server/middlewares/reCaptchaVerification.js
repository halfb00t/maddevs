const axios = require('axios')
const { RECAPTCHA_KEY } = require('../config/env')

export default async token => {
  try {
    return await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_KEY}&response=${token}`)
  } catch (e) {
    console.log(e)
    return e
  }
}

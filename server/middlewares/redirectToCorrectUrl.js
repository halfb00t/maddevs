const getRequestUrl = require('../utils/getRequestUrl')
const config = require('../config')

function redirectToCorrectUrl(req, res, next) {
  const match = config.mainRedirects.find(url => url.from === getRequestUrl(req))
  if (match) res.redirect(301, match.to)
  else next()
}

module.exports = redirectToCorrectUrl

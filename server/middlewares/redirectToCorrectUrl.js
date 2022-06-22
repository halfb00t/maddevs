const getRequestUrl = require('../utils/getRequestUrl')
const config = require('../config')

function redirectToCorrectUrl(req, res, next) {
  if (req.hostname === 'blog.maddevs.io') return res.redirect(301, 'https://maddevs.io/blog/')
  const match = config.mainRedirects.find(url => url.from === getRequestUrl(req))
  if (match) return res.redirect(301, match.to)
  return next()
}

module.exports = redirectToCorrectUrl

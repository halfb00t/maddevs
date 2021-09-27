const getRequestUrl = require('../utils/getRequestUrl')
const config = require('../config')

function redirectToCorrectBlogUrl(req, res, next) {
  const allowedHosts = ['blog.maddevs.co', 'blog.maddevs.io']

  if (allowedHosts.includes(req.headers.host)) {
    const isBlogPost = /\/blog\/(.*\d|\w+)/.test(req.url)
    const match = config.blogRedirects.find(url => url.from === getRequestUrl(req))

    if (isBlogPost) res.redirect(301, `/insights${req.url}`)
    else if (match && Boolean(match.to)) res.redirect(301, match.to)
    else res.redirect(301, '/insights/blog/')
  } else {
    next()
  }
}

module.exports = redirectToCorrectBlogUrl

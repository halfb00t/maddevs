function redirectToValidLink(req, res, next) {
  let link = null

  // Redirect to https if the request is http
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    if (!req.secure) link = `https://${req.headers.host}${req.url}`
  }

  if (link) res.redirect(301, link)
  else next()
}

module.exports = redirectToValidLink

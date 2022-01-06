function redirectToCorrectBlogUrl(req, res, next) {
  const { url } = req
  if (url.slice(0, 15) === '/insights/blog/' && url.length > 15) res.redirect(301, url.substr(9))
  else next()
}

module.exports = redirectToCorrectBlogUrl

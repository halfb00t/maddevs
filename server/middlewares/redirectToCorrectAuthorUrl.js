function redirectToCorrectAuthorUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/authors/')) res.redirect(301, url.replace(/\/authors\//ig, '/blog/authors/', url))
  if (url.startsWith('/blog/author/')) res.redirect(301, url.replace(/\/blog\//ig, '/', url))
  else {
    next()
  }
}

module.exports = redirectToCorrectAuthorUrl

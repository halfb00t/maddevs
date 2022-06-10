function redirectToCorrectAuthorUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/authors/')) return res.redirect(301, url.replace(/\/authors\//ig, '/blog/authors/', url))
  if (url.startsWith('/author/')) return res.redirect(301, url.replace(/\/author\//ig, '/blog/authors/', url))
  if (url.startsWith('/blog/author/')) return res.redirect(301, url.replace(/\/author\//ig, '/authors/', url))
  return next()
}

module.exports = redirectToCorrectAuthorUrl

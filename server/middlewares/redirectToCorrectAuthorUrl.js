function redirectToCorrectAuthorUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/blog/author/') && url.length > 13) res.redirect(301, url.replace(/\/blog\//ig, '/', url))
  else next()
}

export default redirectToCorrectAuthorUrl

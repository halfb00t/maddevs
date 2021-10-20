function redirectToRuCareerPostUrl(req, res, next) {
  const { url } = req
  if (url.slice(0, 15) === '/about/careers/' && url.length > 15) res.redirect(301, `/ru${url}`)
  else next()
}

module.exports = redirectToRuCareerPostUrl

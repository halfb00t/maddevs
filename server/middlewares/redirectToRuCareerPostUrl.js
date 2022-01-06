function redirectToRuCareerPostUrl(req, res, next) {
  const { url } = req
  if (url.slice(0, 9) === '/careers/' && url.length > 9) res.redirect(301, `/ru${url}`)
  else next()
}

module.exports = redirectToRuCareerPostUrl

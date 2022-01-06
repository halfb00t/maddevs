function redirectToRuCareerPostUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/ru/about/careers/')) res.redirect(301, `/ru${url.substr(9)}`)
  if (url.startsWith('/about/careers/')) res.redirect(301, `/ru${url.substr(6)}`)
  if (url.slice(0, 9) === '/careers/' && url.length > 9) res.redirect(301, `/ru${url}`)
  else next()
}

module.exports = redirectToRuCareerPostUrl

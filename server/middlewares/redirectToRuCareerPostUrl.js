function redirectToRuCareerPostUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/ru/about/careers/')) return res.redirect(301, `/ru${url.substr(9)}`)
  if (url.startsWith('/about/careers/')) return res.redirect(301, `/ru${url.substr(6)}`)
  if (url.slice(0, 9) === '/careers/' && url.length > 9) return res.redirect(301, `/ru${url}`)
  return next()
}

module.exports = redirectToRuCareerPostUrl

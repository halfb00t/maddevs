function redirectToRuCareerPostUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/ru/about/careers/')) return res.redirect(301, url.replace(/\/ru\/about\/careers\//ig, '/careers/', url))
  if (url.startsWith('/about/careers/')) return res.redirect(301, url.replace(/\/about\/careers\//ig, '/careers/', url))
  if (url.startsWith('/ru/careers/')) return res.redirect(301, url.replace(/\/ru\/careers\//ig, '/careers/', url))
  return next()
}

module.exports = redirectToRuCareerPostUrl

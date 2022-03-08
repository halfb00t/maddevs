function redirectToCorrectSoftwareTestingUrl(req, res, next) {
  const { url } = req
  if (url.startsWith('/qa-software-testing/')) res.redirect(301, url.replace(/\/qa-software-testing\//ig, '/software-testing/', url))
  else next()
}

export default redirectToCorrectSoftwareTestingUrl

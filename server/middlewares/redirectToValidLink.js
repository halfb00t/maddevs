function redirectToValidLink(req, res, next) {
  let link = null

  // Redirect to https if the request is http
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    if (!req.secure) link = `https://${req.headers.host}${req.url}`
  }

  // Add trailing slash to the URL if it's missing
  if (req.url.substr(-1) !== '/'
    && req.method === 'GET'
    && req.url !== '/sitemap.xml'
  ) {
    if (link) {
      link = `${link}/`
    } else {
      link = `http://${req.headers.host}${req.url}/`
    }
  }

  if (link) res.redirect(301, link)
  else next()
}

export default redirectToValidLink

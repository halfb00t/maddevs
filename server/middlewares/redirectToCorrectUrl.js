import { getRequestUrl } from '../utils/getRequestUrl'
import config from '../config'

function redirectToCorrectUrl(req, res, next) {
  const match = config.mainRedirects.find(url => url.from === getRequestUrl(req))
  if (match) res.redirect(301, match.to)
  else next()
}

export default redirectToCorrectUrl

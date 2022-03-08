import { getRequestUrl } from '../utils/getRequestUrl'
import getPrismicDocuments from '../utils/getPrismicDocuments'

const extractRedirectsList = document => {
  let newRedirects = []
  if (!document) return newRedirects
  const { redirects = [] } = document.data
  if (!redirects && !redirects.length) return newRedirects

  newRedirects = redirects
    .filter(item => (item.redirect_from && item.redirect_to))
    .map(({ redirect_from: from, redirect_to: to }) => ({
      from,
      to,
    }))
  return newRedirects
}

async function redirectToPrismicUrl(req, res, next) {
  const prismicDocuments = await getPrismicDocuments('[[at(document.type,"redirects")]]')
  const redirectsList = extractRedirectsList(prismicDocuments[0])
  if (!redirectsList && !redirectsList.length) return next()
  const match = redirectsList.find(url => url.from === getRequestUrl(req))
  if (match) return res.redirect(301, match.to)
  return next()
}

export default redirectToPrismicUrl

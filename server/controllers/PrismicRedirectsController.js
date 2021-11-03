const { updateRedirectsList } = require('../services/PrismicRedirectsService')

const updateRedirects = async (req, res) => {
  if (
    !req.body.domain
    || req.body.domain !== 'superpupertest'
    || req.body.secret !== 'redirects-webhook'
  ) {
    return res.status(403).json({
      status: 403,
      message: 'Access forbidden',
    })
  }

  const response = await updateRedirectsList(res)
  return res.json(response)
}

module.exports = {
  updateRedirects,
}

const { sendMailFromVariables, sendCVResponseMail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')
const { validate } = require('../utils/validation')
const { getIPByRequest, getLocationByIP, isBlockedIP } = require('../services/IPService')

const parseRequest = req => ({
  ...req,
  body: {
    ...JSON.parse(req.body.payload),
  },
})

const buildRequest = (req, key) => ({
  ...req,
  body: req.body[key],
})

async function index(req, res) {
  const parsedReq = parseRequest(req)
  const ip = await getIPByRequest(req)
  const { city, country } = await getLocationByIP(ip)
  if (isBlockedIP(ip)) return res.json({ error: 'Your ip is in a blacklist' })

  const huntflowReq = buildRequest(parsedReq, 'huntflow')
  const rawBodyReq = buildRequest(parsedReq, 'email')

  const bodyReq = {
    ...rawBodyReq,
    body: {
      ...rawBodyReq.body,
      variables: {
        ...rawBodyReq.body.variables,
        ip,
        geoIp: `Country: ${country}, City: ${city}`,
      },
    },
  }

  const huntflowValidation = validate(huntflowReq, 'huntflow')
  if (!huntflowValidation.isValid) return res.status(huntflowValidation.error.status).json(huntflowValidation.error)

  const emailValidation = validate(bodyReq, 'email')
  if (!emailValidation.isValid) return res.status(emailValidation.error.status).json(emailValidation.error)

  const huntflowResponse = await sendApplication(huntflowReq)
  const hrEmailResponse = await sendMailFromVariables(bodyReq.body)
  const userEmailResponse = await sendCVResponseMail(bodyReq.body)

  return res.json({ email: hrEmailResponse, userEmail: userEmailResponse, huntflow: huntflowResponse })
}

module.exports = {
  index,
}

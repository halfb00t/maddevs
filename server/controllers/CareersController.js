const { sendMailFromVariables, sendCVResponseMail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')
const { validate } = require('../utils/validation')
const { getIPByRequest, getLocation, isBlockedIP } = require('../services/IPService')
const { reCaptchaVerification } = require('../services/reCaptchaVerification')

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
  if (!parsedReq.body.variables.token) return res.json({ success: false, message: 'Invalid token' })
  const { data } = await reCaptchaVerification(parsedReq.body.variables.token)
  if (!data?.success) return res.json({ success: data.success, message: data['error-codes'] })

  const ipFromRequest = getIPByRequest(req)

  const { ip, city, country } = await getLocation(ipFromRequest)
  if (isBlockedIP(ip)) return res.json({ error: 'Your ip is in a blacklist' })

  const huntflowReq = buildRequest(parsedReq, 'huntflow')
  const rawBodyReq = buildRequest(parsedReq, 'email')

  const emailReq = {
    ...rawBodyReq,
    body: {
      ...rawBodyReq.body,
      variables: {
        ...rawBodyReq.body.variables,
        ip: ip || ipFromRequest,
        geoIp: `Country: ${country}, City: ${city}`,
      },
    },
  }

  const huntflowValidation = validate(huntflowReq, 'huntflow')
  if (!huntflowValidation.isValid) return res.status(huntflowValidation.error.status).json(huntflowValidation.error)

  const emailValidation = validate(emailReq, 'email')
  if (!emailValidation.isValid) return res.status(emailValidation.error.status).json(emailValidation.error)

  const huntflowResponse = await sendApplication(huntflowReq)
  const hrEmailResponse = await sendMailFromVariables(emailReq.body)
  const userEmailResponse = await sendCVResponseMail(emailReq.body)

  return res.json({ email: hrEmailResponse, userEmail: userEmailResponse, huntflow: huntflowResponse })
}

module.exports = {
  index,
}

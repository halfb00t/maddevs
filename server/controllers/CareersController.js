const { readFile } = require('fs').promises
const { sendMailFromVariables, sendCVResponseMail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')
const { validate } = require('../utils/validation')
const { getIPByRequest, getLocation, isBlockedIP } = require('../services/IPService')

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
  let base64 = await readFile(req.file.path, { encoding: 'base64' })
  base64 = base64.replace(/^data:(.*,)?/, '')
  const payload = JSON.parse(req.body.payload)

  payload.email.attachment.base64 = base64
  req.body.payload = JSON.stringify(payload)

  const parsedReq = parseRequest(req)
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

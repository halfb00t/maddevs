const { sendMailFromVariables, sendEmailToRequest, verifyEmailDelivery } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')
const { validate } = require('../utils/validation')
const {
  getIPByRequest, getLocationByIP, isBlockedIP, isTestIP,
} = require('../services/IPService')

const ADDRESS_NOT_FOUND_ERROR = 550

async function create(req, res) {
  const { isValid, error } = validate(req, 'email')
  if (!isValid) return res.status(error.status).json(error)

  const ip = getIPByRequest(req)
  const { city, country } = await getLocationByIP(ip)
  if (isBlockedIP(ip)) return res.json({ error: 'Your ip is in a blacklist' })

  const body = {
    ...req.body,
    variables: {
      ...req.body.variables,
      ip,
      geoIp: `Country: ${country}, City: ${city}`,
    },
  }

  const { testIP, testEmail } = isTestIP(ip)
  if (testIP) {
    body.variables.emailTo = testEmail
    await sendMailFromVariables(body)
    return res.json({ message: 'Request sent to test email' })
  }

  const delivery = await sendEmailToRequest(body)
  const deliveryReport = await verifyEmailDelivery(delivery.id)
  if (deliveryReport.smtp_answer_code === ADDRESS_NOT_FOUND_ERROR && !body.variables.phoneNumber) {
    return res.json({ error: deliveryReport?.smtp_answer_code })
  }

  await sendMailFromVariables(body)
  const response = await createLead(req)

  return res.json(response)
}

module.exports = {
  create,
}

const { sendMailFromVariables, sendEmailToRequest, verifyEmailDelivery } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')
const { validate } = require('../utils/validation')

const ADDRESS_NOT_FOUND_ERROR = 550

async function create(req, res) {
  const { isValid, error } = validate(req, 'email')
  if (!isValid) return res.status(error.status).json(error)

  const delivery = await sendEmailToRequest(req.body)
  const deliveryReport = await verifyEmailDelivery(delivery.id)
  if (deliveryReport.smtp_answer_code === ADDRESS_NOT_FOUND_ERROR && !req.body.variables.phoneNumber) return res.json({ error: deliveryReport?.smtp_answer_code })

  await sendMailFromVariables(req.body)
  const response = await createLead(req)

  return res.json(response)
}

module.exports = {
  create,
}

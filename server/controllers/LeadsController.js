import { sendMailFromVariables } from '../services/EmailsService'
import { createLead } from '../services/LeadsService'
import { validate } from '../utils/validation'

import {
  getIPByRequest,
  getLocation,
  isBlockedIP,
  isTestIP,
} from '../services/IPService'

import { reCaptchaVerification } from '../services/reCaptchaVerification'

export async function create(req, res) {
  if (req.body.variables.fromId === 'contact-me-modal' || req.body.variables.fromId === 'footer-form') {
    if (!req.body.variables.token) return res.json({ success: false, message: 'Invalid token' })
    const { data } = await reCaptchaVerification(req.body.variables.token)
    if (!data?.success) return res.json({ success: data.success, message: data['error-codes'] })
  }

  const { isValid, error } = validate(req, 'email')
  if (!isValid) return res.status(error.status).json(error)

  const ipFromRequest = getIPByRequest(req)

  const { ip, city, country } = await getLocation(ipFromRequest)
  if (isBlockedIP(ip)) return res.json({ error: 'Your ip is in a blacklist' })

  const body = {
    ...req.body,
    variables: {
      ...req.body.variables,
      ip: ip || ipFromRequest,
      geoIp: `Country: ${country}, City: ${city}`,
    },
  }

  const { testIP, testEmail } = isTestIP(ip)
  if (testIP) {
    body.variables.emailTo = testEmail
    if (testEmail === '') return res.json({ error: 'Test email is absent' })
    await sendMailFromVariables(body)
    return res.json({ message: 'Request sent to test email' })
  }

  await sendMailFromVariables(body)
  const response = await createLead(req)

  return res.json(response)
}

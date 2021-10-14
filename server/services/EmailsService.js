const sendpulse = require('sendpulse-api')
const config = require('../config')

const DEFAULT_FROM_EMAIL = 'marketing@maddevs.io'
const DEFAULT_FROM_EMAIL_TEAM = 'team@maddevs.io'
const DEFAULT_TO_NAME = 'Mad Devs Team'

async function initSendpulse(userId, apiKey, tokenStorage) {
  return new Promise(resolve => {
    sendpulse.init(userId, apiKey, tokenStorage, () => resolve())
  })
}

async function sendpulseSMTPRequest(email) {
  return new Promise(resolve => {
    sendpulse.smtpSendMail(data => {
      resolve(data)
    }, email)
  })
}

async function send(email) {
  await initSendpulse(
    config.SENDPULSE_API_USER_ID,
    config.SENDPULSE_API_KEY,
    config.SENDPULSE_TOKEN_STORAGE,
  )

  return sendpulseSMTPRequest(email)
}

function buildEmail({
  subject, templateId, variables, fromName, fromEmail, toName, toEmail, attachment,
}) {
  const email = {
    subject,
    template: {
      id: templateId, // required
      variables,
    },
    from: {
      name: fromName,
      email: fromEmail,
    },
    to: [
      {
        name: toName,
        email: toEmail,
      },
    ],
  }

  if (attachment) email.attachments_binary = { [attachment.name]: attachment.base64 }
  return email
}

async function sendMailFromVariables({ variables, templateId, attachment }) {
  const emailParams = {
    templateId,
    variables,
    attachment,
    subject: variables.subject,
    fromName: variables.modalTitle,
    fromEmail: DEFAULT_FROM_EMAIL,
    toName: DEFAULT_TO_NAME,
    toEmail: variables.emailTo,
  }

  const email = buildEmail(emailParams)
  return send(email)
}

async function verifyEmailDelivery(id) {
  return new Promise(resolve => {
    sendpulse.smtpGetEmailInfoById(data => {
      resolve(data)
    }, id)
  })
}

async function sendEmailToRequest({ variables }) {
  const emailParams = {
    templateId: 672221, // Required
    variables,
    subject: variables.subject,
    fromName: DEFAULT_TO_NAME,
    fromEmail: DEFAULT_FROM_EMAIL_TEAM,
    toName: variables.fullName,
    toEmail: variables.email,
  }

  const email = buildEmail(emailParams)
  return send(email)
}

async function sendCVResponseMail({ variables }) {
  const emailParams = {
    templateId: 638666,
    variables,
    subject: variables.subject,
    fromName: 'Mad Devs HR department',
    fromEmail: DEFAULT_FROM_EMAIL,
    toName: variables.fullName,
    toEmail: variables.email,
  }

  const email = buildEmail(emailParams)
  return send(email)
}

module.exports = {
  sendMailFromVariables,
  sendEmailToRequest,
  sendCVResponseMail,
  verifyEmailDelivery,
}

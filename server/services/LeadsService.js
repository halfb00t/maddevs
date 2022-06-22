const axios = require('axios')
const {
  ATLASSIAN_AUTH_TOKEN, ATLASSIAN_PROJECT_KEY, ATLASSIAN_API_URL, ATLASSIAN_PROJECT_EBOOK_KEY,
} = require('../config/env')

function generateToken(token) {
  return Buffer.from(token).toString('base64')
}

function getAdditionalDescription(variables) {
  if (variables.interestedExpertise) return `Interested expertise in: ${variables.interestedExpertise}`
  if (variables.questionsOnItConsulting) return `I need expert advice: ${variables.questionsOnItConsulting}`
  if (variables.needAssistanceWith) return `I need assistance with: ${variables.needAssistanceWith}`
  if (variables.selectedProjectHost) return `Project hosted on: ${variables.selectedProjectHost}`
  if (variables.selectedTeamSize) return `Expected team size: ${variables.selectedTeamSize}`
  return ''
}

function buildPayload({ variables }) {
  const additionalDescription = getAdditionalDescription(variables)

  const description = variables.projectDescription || variables.projectDescriber || ''

  return {
    fields: {
      summary: variables.fullName, // issue title
      issuetype: {
        id: '10082',
      },
      project: {
        key: ATLASSIAN_PROJECT_KEY,
      },
      customfield_10058: variables.fullName,
      customfield_10056: variables.email,
      customfield_10063: variables.company,
      customfield_10057: variables.phoneNumber,
      customfield_10166: variables.interest ? { value: variables.interest } : null,
      customfield_10207: variables.newsLetter ? { value: variables.newsLetter } : null,
      customfield_10064: 'maddevs.io',
      customfield_10066: 'https://megadocnotprovided.com',
      customfield_10183: variables.formLocation,
      customfield_10184: variables.geoIp,
      customfield_10185: variables.pageUrl,
      customfield_10186: variables.userBrowser,
      customfield_10187: variables.userOS,
      customfield_10188: variables.userPlatform,
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: additionalDescription ? `${additionalDescription}\n${description}` : description,
                type: 'text',
              },
            ],
          },
        ],
      },
    },
  }
}

function buildEbookPayload({ variables }) {
  return {
    fields: {
      summary: variables.fullName, // issue title
      issuetype: {
        id: '10002',
      },
      project: {
        key: ATLASSIAN_PROJECT_EBOOK_KEY,
      },
      customfield_10058: variables.fullName,
      customfield_10056: variables.email,
      customfield_10207: variables.consent_to_mailing ? { value: variables.consent_to_mailing } : null,
      customfield_10185: variables.pageUrl,
      customfield_10064: 'maddevs.io',
      customfield_10183: variables.formLocation,
    },
  }
}

async function createLead(body) {
  try {
    const token = generateToken(ATLASSIAN_AUTH_TOKEN)
    const payload = buildPayload(body)

    const response = await axios.post(ATLASSIAN_API_URL, payload, {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error
  }
}

async function createEbookLead(body) {
  try {
    const token = generateToken(ATLASSIAN_AUTH_TOKEN)
    const payload = buildEbookPayload(body)

    const response = await axios.post(ATLASSIAN_API_URL, payload, {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error
  }
}

module.exports = {
  createEbookLead,
  createLead,
}

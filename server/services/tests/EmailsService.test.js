import 'regenerator-runtime'
import * as emailsService from '../EmailsService'

jest.mock('sendpulse-api', () => ({
  init: (userId, apiKey, tokenStorage, cb) => cb(),
  smtpSendMail: jest.fn((cb, email) => cb(email)),
}))

describe('EmailsService', () => {
  const req = {
    body: {
      variables: {
        modalTitle: 'title',
        emailTo: 'user',
        subject: 'subject',
        fullName: 'John Doe',
        email: 'johndoe@g.com',
      },
      templateId: 123,
      attachment: null,
    },
  }

  it('should correctly called sendMailFromVariables', async () => {
    const result = await emailsService.sendMailFromVariables(req.body)

    expect(result).toEqual({
      subject: req.body.variables.subject,
      template: {
        id: req.body.templateId, // required
        variables: req.body.variables,
      },
      from: {
        name: req.body.variables.modalTitle,
        email: 'marketing@maddevs.io',
      },
      to: [
        {
          name: 'Mad Devs Team',
          email: req.body.variables.emailTo,
        },
      ],
    })
  })

  it('should correctly called sendCVResponseMail', async () => {
    const result = await emailsService.sendCVResponseMail(req.body)

    expect(result).toEqual({
      subject: req.body.variables.subject,
      template: {
        id: 638666, // required
        variables: req.body.variables,
      },
      from: {
        name: 'Mad Devs HR department',
        email: 'marketing@maddevs.io',
      },
      to: [
        {
          name: 'John Doe',
          email: 'johndoe@g.com',
        },
      ],
    })
  })
})

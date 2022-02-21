import 'regenerator-runtime/runtime'
import * as controller from '../LeadsController'
import * as emailsService from '../../services/EmailsService'
import * as leadsService from '../../services/LeadsService'
import * as IPService from '../../services/IPService'
import * as reCaptcha from '../../services/reCaptchaVerification'

jest.mock('../../services/EmailsService', () => ({
  sendMailFromVariables: jest.fn(),
}))

jest.mock('../../services/LeadsService', () => ({
  createLead: jest.fn(),
}))

jest.mock('../../services/reCaptchaVerification', () => ({
  reCaptchaVerification: jest.fn(),
}))

jest.mock('../../services/IPService', () => ({
  getIPByRequest: jest.fn(),
  getLocation: jest.fn(),
  isBlockedIP: jest.fn(),
  isTestIP: jest.fn(),
}))
// mocks
const sendEmail = jest.fn(() => Promise.resolve({ id: '1' }))
const createLead = jest.fn(() => Promise.resolve({ data: 'data' }))
const getIPByRequest = jest.fn(() => Promise.resolve('212.42.107.134'))
const getLocation = jest.fn(() => Promise.resolve({
  country: 'Kyrgyzstan',
  city: 'Bishkek',
}))

const verification = jest.fn(() => Promise.resolve({ data: { success: true, message: 'test' } }))

emailsService.sendMailFromVariables.mockImplementation(sendEmail)
leadsService.createLead.mockImplementation(createLead)
IPService.getIPByRequest.mockImplementation(getIPByRequest)
IPService.getLocation.mockImplementation(getLocation)
reCaptcha.reCaptchaVerification.mockImplementation(verification)

describe('leadsController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: { variables: { token: 'test' } },
    }

    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid templateId in req.body', async () => {
    await controller.create(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'templateId key not found or incorrect',
        status: 500,
      })
  })

  it('should correctly call sendEmail and createLead methods', async () => {
    IPService.isBlockedIP.mockImplementation(jest.fn(() => false))
    IPService.isTestIP.mockImplementation(jest.fn(() => ({ testIP: false, testEmail: '' })))
    req.body.templateId = 123
    req.body.variables = { phoneNumber: '', token: 'test' }
    const data = await controller.create(req, res)
    expect(data)
      .toEqual({ data: 'data' })
    expect(emailsService.sendMailFromVariables)
      .toHaveBeenCalledTimes(1)
    expect(leadsService.createLead)
      .toHaveBeenCalledTimes(1)
  })
  it('should correctly return error if user blocked', async () => {
    IPService.isBlockedIP.mockImplementation(jest.fn(() => true))
    IPService.isTestIP.mockImplementation(jest.fn(() => ({ testIP: false, testEmail: '' })))
    const data = await controller.create(req, res)
    expect(data)
      .toEqual({
        message: 'templateId key not found or incorrect',
        status: 500,
      })
  })
  it('should correctly send email to testEmail only if ip is a test ip', async () => {
    IPService.isBlockedIP.mockImplementation(jest.fn(() => false))
    IPService.isTestIP.mockImplementation(jest.fn(() => ({ testIP: true, testEmail: 'test@test.test' })))
    req.body.templateId = 123
    req.body.variables = { phoneNumber: '', token: 'test' }
    const data = await controller.create(req, res)
    expect(data)
      .toEqual({ message: 'Request sent to test email' })
  })
  it('should correctly return error if ip is a test ip and no test email present', async () => {
    IPService.isBlockedIP.mockImplementation(jest.fn(() => false))
    IPService.isTestIP.mockImplementation(jest.fn(() => ({ testIP: true, testEmail: '' })))
    req.body.templateId = 123
    req.body.variables = { phoneNumber: '', token: 'test' }
    const data = await controller.create(req, res)
    expect(data)
      .toEqual({ error: 'Test email is absent' })
  })
})

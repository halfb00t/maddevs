import 'regenerator-runtime/runtime'
import * as controller from '../CareersController'
import * as huntflowService from '../../services/HuntflowService'
import * as emailsService from '../../services/EmailsService'
import * as IPService from '../../services/IPService'
import * as reCaptcha from '../../services/reCaptchaVerification'

jest.mock('../../services/EmailsService', () => ({
  sendMailFromVariables: jest.fn(),
  sendCVResponseMail: jest.fn(),
}))

jest.mock('../../services/reCaptchaVerification', () => ({
  reCaptchaVerification: jest.fn(),
}))

jest.mock('../../services/HuntflowService', () => ({
  sendApplication: jest.fn(),
}))

jest.mock('../../services/IPService', () => ({
  getIPByRequest: jest.fn(),
  getLocation: jest.fn(),
  isBlockedIP: jest.fn(),
}))

// mocks
const sendApplication = jest.fn()
const sendEmail = jest.fn(() => Promise.resolve({ data: 'data' }))
const getIPByRequest = jest.fn(() => Promise.resolve('212.42.107.134'))
const getLocation = jest.fn(() => Promise.resolve({
  country: 'Kyrgyzstan',
  city: 'Bishkek',
}))
const isBlockedIP = jest.fn(() => false)

const verification = jest.fn(() => Promise.resolve({ data: { success: true, message: 'test' } }))

emailsService.sendMailFromVariables.mockImplementation(sendEmail)
emailsService.sendCVResponseMail.mockImplementation(sendEmail)
huntflowService.sendApplication.mockImplementation(sendApplication)
IPService.getIPByRequest.mockImplementation(getIPByRequest)
IPService.getLocation.mockImplementation(getLocation)
IPService.isBlockedIP.mockImplementation(isBlockedIP)
reCaptcha.reCaptchaVerification.mockImplementation(verification)

describe('careersController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: {
        payload: '{ "variables": { "token": "token" }, "huntflow": {}, "email": {} }',
      },
    }

    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid firstName in req.body', async () => {
    await controller.index(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'firstName key not found',
        status: 500,
      })
  })

  it('should correctly handle invalid lastName in req.body', async () => {
    req.body.payload = '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first" }, "email": {} }'
    await controller.index(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'lastName key not found',
        status: 500,
      })
  })

  it('should correctly handle invalid file in req', async () => {
    req.body.payload = '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first", "lastName": "last" }, "email": {} }'
    await controller.index(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'cvFile key not found',
        status: 500,
      })
  })

  it('should correctly handle invalid templateId in req body', async () => {
    req = {
      body: {
        payload: '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first", "lastName": "last" }, "email": {} }',
      },
      file: {
        path: 'path',
      },
    }
    await controller.index(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'templateId key not found or incorrect',
        status: 500,
      })
  })

  it('should correctly call sendEmail and createLead methods', async () => {
    req = {
      body: {
        payload: '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first", "lastName": "last" }, "email": {"templateId": 123, "variables": {}} }',
      },
      file: {
        path: 'path',
      },
    }
    const data = await controller.index(req, res)
    expect(data)
      .toEqual({
        email: { data: 'data' },
        userEmail: { data: 'data' },
      })
    expect(huntflowService.sendApplication)
      .toHaveBeenCalledTimes(1)
    expect(emailsService.sendMailFromVariables)
      .toHaveBeenCalledTimes(1)
    expect(emailsService.sendCVResponseMail)
      .toHaveBeenCalledTimes(1)
  })
})

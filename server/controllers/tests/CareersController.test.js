import 'regenerator-runtime/runtime'
import * as controller from '../CareersController'
import * as huntflowService from '../../services/HuntflowService'
import * as emailsService from '../../services/EmailsService'
import * as IPService from '../../services/IPService'

const fs = require('fs').promises

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}))

fs.readFile.mockReturnValue('base64')

jest.mock('../../services/EmailsService', () => ({
  sendMailFromVariables: jest.fn(),
  sendCVResponseMail: jest.fn(),
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

emailsService.sendMailFromVariables.mockImplementation(sendEmail)
emailsService.sendCVResponseMail.mockImplementation(sendEmail)
huntflowService.sendApplication.mockImplementation(sendApplication)
IPService.getIPByRequest.mockImplementation(getIPByRequest)
IPService.getLocation.mockImplementation(getLocation)
IPService.isBlockedIP.mockImplementation(isBlockedIP)

describe('careersController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: {
        payload: '{ "variables": { "token": "token" }, "huntflow": {}, "email": { "attachment": { "base64": null } } }',
      },
      file: {
        path: '/tmp/path',
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
    req.body.payload = '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first" }, "email": { "attachment": { "base64": null } } }'
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
    req.body.payload = '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first", "lastName": "last" }, "email": { "attachment": { "base64": null } } }'
    await controller.index(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'templateId key not found or incorrect',
        status: 500,
      })
  })

  it('should correctly handle invalid templateId in req body', async () => {
    req = {
      body: {
        payload: '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first", "lastName": "last" }, "email": { "attachment": { "base64": null } } }',
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
        payload: '{ "variables": { "token": "token" }, "huntflow": { "firstName": "first", "lastName": "last" }, "email": { "templateId": 123, "variables": {}, "attachment": { "base64": null } } }',
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

import 'regenerator-runtime'
import fetch from 'node-fetch'
import * as IPService from '../IPService'

jest.mock('node-fetch', () => (
  {
    default: jest.fn(),
  }
))

jest.mock('../../config/env', () => ({
  IP_BAN_LIST: '212.42.107.138, 212.42.107.133',
  IP_TEST_LIST: '91.247.56.247',
  TEST_EMAIL: 'test@test.com',
}))

const getLocationData = locationData => Promise.resolve({
  json: jest.fn(() => Promise.resolve(locationData)),
})

describe('IPService', () => {
  it('should correctly return IP by request if ip is not an array', async () => {
    const requestData = {
      headers: {
        'x-forwarded-for': '212.42.107.138',
      },
    }
    const userIP = IPService.getIPByRequest(requestData)
    expect(userIP)
      .toBe('212.42.107.138')
  })

  it('should correctly return IP by request if ip is an array', async () => {
    const requestData = {
      headers: {
        'x-forwarded-for': '1.1.1.1, 212.42.107.138',
      },
    }
    const userIP = IPService.getIPByRequest(requestData)
    expect(userIP)
      .toBe('1.1.1.1')
  })

  it('should correctly return True if user blocked', async () => {
    const IP = '212.42.107.138'

    const isBlocked = IPService.isBlockedIP(IP)
    expect(isBlocked)
      .toBeTruthy()
  })

  it('should correctly return True if id is testId', async () => {
    const IP = '91.247.56.247'

    const testIP = IPService.isTestIP(IP)
    expect(testIP.testIP)
      .toBeTruthy()
    expect(testIP.testEmail)
      .toBe('test@test.com')
  })

  it('should correctly return Location by IP', async () => {
    fetch.default.mockImplementation(() => getLocationData({
      city: 'bishkek',
      country: 'Kyrgyzstan',
    }))

    const location = await IPService.getLocationByIP()
    expect(location)
      .toEqual({
        city: 'bishkek',
        country: 'Kyrgyzstan',
      })
  })
  it('should correctly return Location by IP (alternative case)', async () => {
    fetch.default.mockImplementation(() => getLocationData({}))

    const location = await IPService.getLocationByIP()
    expect(location)
      .toEqual({
        city: '-',
        country: '-',
      })
  })

  it('should correctly throw Error', async () => {
    const error = new Error('API error')
    fetch.default.mockImplementation(() => Promise.reject(error))

    await expect(IPService.getLocationByIP())
      .rejects
      .toThrow(error)
  })
})

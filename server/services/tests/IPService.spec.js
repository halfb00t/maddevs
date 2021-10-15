import 'regenerator-runtime'
import * as IPService from '../IPService'

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
  country: 'Kyrgyzstan',
  city: 'Bishkek',
})))

jest.mock('../../config/env', () => ({
  IP_BAN_LIST: '212.42.107.138, 212.42.107.133',
}))

describe('IPService', () => {
  it('should correctly return IP by request', async () => {
    const requestData = {
      headers: {
        'x-forwarded-for': '212.42.107.138',
      },
    }
    const userIP = IPService.getIPByRequest(requestData)
    expect(userIP)
      .toBe(requestData.headers['x-forwarded-for'])
  })

  it('should correctly return True if user blocked', async () => {
    const IP = '212.42.107.138'

    const isBlocked = IPService.isBlockedIP(IP)
    expect(isBlocked)
      .toBeTruthy()
  })
})

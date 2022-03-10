import 'regenerator-runtime'
import axios from 'axios'
import * as IPService from '../IPService'

jest.mock('axios')

jest.mock('../../config/env', () => ({
  IP_BAN_LIST: '212.42.107.138, 212.42.107.133',
  IP_TEST_LIST: '91.247.56.247',
  TEST_EMAIL: 'test@test.com',
}))

describe('IPService', () => {
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

  it('should correctly return Location', async () => {
    const info = {
      data: {
        ip: 'ip',
        city: 'bishkek',
        country: 'Kyrgyzstan',
      },
    }

    axios.get.mockResolvedValue(info)

    const location = await IPService.getLocation()
    expect(location)
      .toEqual({
        ip: 'ip',
        city: 'bishkek',
        country: 'Kyrgyzstan',
      })
  })

  it('should correctly return Location (alternative case)', async () => {
    axios.get.mockResolvedValue({ data: '' })

    const location = await IPService.getLocation()
    expect(location)
      .toEqual({
        ip: '-',
        city: '-',
        country: '-',
      })
  })

  it('should correctly throw Error', async () => {
    const error = new Error('API error')
    axios.get.mockImplementation(() => Promise.reject(error))

    await expect(IPService.getLocation())
      .rejects
      .toThrow(error)
  })
})

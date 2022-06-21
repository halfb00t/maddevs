/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { sendEmail } from '@/api/email'

const testMockData = {
  body: {
    name: 'test',
    email: 'test@test.te',
  },
}

jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve(testMockData))

describe('sendEmail function', () => {
  it('should correctly return data', async () => {
    const response = await sendEmail(axios, {
      base64: '231test',
      ...testMockData,
    })
    expect(response).toEqual(testMockData)
  })

  it('should correctly failure return url', async () => {
    axios.post.mockImplementation(() => Promise.reject('error'))
    const response = await sendEmail(axios, {
      base64: '231test',
      ...testMockData,
    })
    expect(response).toBe('error')
  })
})

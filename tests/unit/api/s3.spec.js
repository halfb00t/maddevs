/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { getLinkWithLifeTime } from '@/api/s3'

jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve('https://url.com'))

describe('getLinkWithLifeTime function', () => {
  it('should correctly return url', async () => {
    const response = await getLinkWithLifeTime(axios)
    expect(response).toBe('https://url.com')
  })

  it('should correctly failure return url', async () => {
    axios.post.mockImplementation(() => Promise.reject('error'))
    const response = await getLinkWithLifeTime(axios)
    expect(response).toBe('error')
  })
})

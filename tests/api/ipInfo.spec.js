/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { getIPInfo } from '@/api/ipInfo'

const expectedResult = {
  ip: 'ip',
  city: 'city',
  region: 'region',
  country: 'country',
}

jest.spyOn(axios, 'get')

describe('IPinfo service', () => {
  it('should correctly return data from first api response', async () => {
    axios.get.mockImplementation(() => Promise.resolve({
      data: {
        ip: 'ip',
        city: 'city',
        region: 'region',
        country: 'country',
      },
    }))
    expect(await getIPInfo()).toEqual(expectedResult)
  })

  it('should return the empty object if axios failed', async () => {
    axios.get.mockImplementation(() => Promise.reject('error'))
    expect(await getIPInfo()).toEqual({})
  })
})

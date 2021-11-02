import 'regenerator-runtime/runtime'
import * as controller from '../PrismicRedirectsController'
import * as prismicRedirectsService from '../../services/PrismicRedirectsService'

jest.mock('../../services/PrismicRedirectsService', () => ({
  updateRedirectsList: jest.fn(),
}))

const updateRedirects = jest.fn(() => Promise.resolve({ message: 'Prismic redirects file has been updated' }))
prismicRedirectsService.updateRedirectsList.mockImplementation(updateRedirects)

describe('PrismicRedirectsController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)
    req = {
      body: {},
    }
    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid secret or domain in req.body', async () => {
    await controller.updateRedirects(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(403)
    expect(json)
      .toHaveBeenCalledWith({
        status: 403,
        message: 'Access forbidden',
      })
  })

  it('should correctly update prismic redirects list', async () => {
    req.body.domain = 'superpupertest'
    req.body.secret = 'redirects-webhook'
    const data = await controller.updateRedirects(req, res)
    expect(data)
      .toEqual({ message: 'Prismic redirects file has been updated' })
  })
})

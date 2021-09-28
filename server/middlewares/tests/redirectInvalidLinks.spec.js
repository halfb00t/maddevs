import redirectInvalidLinks from '../redirectInvalidLinks'

describe('redirectInvalidLinks', () => {
  let req = null
  let res = null
  let next = null

  beforeEach(() => {
    req = {
      headers: {
        host: 'maddevs.io',
      },
      url: '/',
    }
    res = {
      redirect: jest.fn(),
    }
    next = jest.fn()
  })

  afterEach(() => {
    req = null
    res = null
    next = null
  })

  it('not match urls', () => {
    redirectInvalidLinks(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })

  it('match urls', () => {
    req.url = '/projects'
    redirectInvalidLinks(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.io/clients/case-studies/')
  })
})

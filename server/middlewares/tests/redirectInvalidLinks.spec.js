import redirectInvalidLinks from '../redirectInvalidLinks'

describe('redirectInvalidLinks', () => {
  let req = null
  let res = null
  let next = null

  // TODO remove .co for production
  beforeEach(() => {
    req = {
      headers: {
        host: 'maddevs.co',
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

  // TODO remove .co for production
  it('match urls', () => {
    req.url = '/projects'
    redirectInvalidLinks(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.co/clients/case-studies')
  })
})

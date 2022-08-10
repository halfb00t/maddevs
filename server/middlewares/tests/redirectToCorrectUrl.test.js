import redirectToCorrectUrl from '../redirectToCorrectUrl'

describe('redirectToCorrectUrl', () => {
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

  it('if path "/test-redirects" will be redirect to /test-redirects/success', () => {
    req.headers.host = 'maddevs.io'
    req.url = '/test-redirects'
    redirectToCorrectUrl(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.io/test-redirects/success/')
  })

  it('if hostname blog.maddevs.io will be redirect to https://maddevs.io/blog/', () => {
    req.headers.host = 'blog.maddevs.io'
    req.hostname = 'blog.maddevs.io'
    redirectToCorrectUrl(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.io/blog/')
  })

  it('if no hostname blog.maddevs.io and no url will be call next', () => {
    req.headers.host = 'maddevs.io'
    req.hostname = ''
    req.url = ''
    redirectToCorrectUrl(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })
})

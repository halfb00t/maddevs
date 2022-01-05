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
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.io/test-redirects/success')
  })
})

import redirectToValidLink from '../redirectToValidLink'

describe('redirectToValidLink', () => {
  let req = null
  let res = null
  let next = null

  beforeEach(() => {
    req = {
      secure: true,
      method: 'GET',
      headers: {
        host: 'maddevs.io',
      },
      url: '/123/',
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

  it('with trailing slash and secure', () => {
    redirectToValidLink(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })

  it('with trailing slash but not secure', () => {
    req.secure = false
    redirectToValidLink(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, `https://${req.headers.host}${req.url}`)
  })

  it('with trailing slash after sitemap will be redirect to url without /````', () => {
    req.url = '/sitemapindex.xml/'
    redirectToValidLink(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, `https://${req.headers.host}/sitemapindex.xml`)
  })

  it('without trailing slash and not secure', () => {
    req.secure = false
    req.url = '/123'
    redirectToValidLink(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, `https://${req.headers.host}${req.url}/`)
  })
})

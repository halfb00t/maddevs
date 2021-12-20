import redirectHrTags from '../redirectHrTags'

describe('redirectHrTags', () => {
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
  // TODO remove .co for production
  it('if path "/insights/blog/tag/copywriter" has in ignore list > will be redirect to careers page', () => {
    req.headers.host = 'maddevs.co'
    req.url = '/blog/tag/copywriter'
    redirectHrTags(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.co/about/careers/#open-positions')
  })

  // TODO remove .co for production
  it('if path "/insights/blog/tag/ui" does not exist in ignore list > redirect not call', () => {
    req.headers.host = 'maddevs.co'
    req.url = '/insights/blog/tag/ui'
    redirectHrTags(req, res, next)
    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})

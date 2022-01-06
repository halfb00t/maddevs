import redirectToCorrectBlogUrl from '../redirectToCorrectBlogUrl'

describe('redirectToCorrectBlogUrl middleware', () => {
  let req = null
  let res = null
  let next = null

  beforeEach(() => {
    req = {
      path: '',
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

  it('should correctly call redirect to blog page url if req.path contain /insights', () => {
    req.url = '/insights/blog/test/'

    redirectToCorrectBlogUrl(req, res, next)

    expect(res.redirect).toHaveBeenCalledWith(301, '/blog/test/')
    expect(next).not.toHaveBeenCalled()
  })

  it('should not call redirect to blog page url if req.path does not contains /insight', () => {
    req.url = '/blog/test/'

    redirectToCorrectBlogUrl(req, res, next)

    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})

import redirectToCorrectAuthorUrl from '../redirectToCorrectAuthorUrl'

describe('redirectToCorrectAuthorUrl middleware', () => {
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

  it('should correctly call redirect to author page url if req.path contain /blog/author/', () => {
    req.url = '/blog/author/test/'

    redirectToCorrectAuthorUrl(req, res, next)

    expect(res.redirect).toHaveBeenCalledWith(301, '/author/test/')
    expect(next).not.toHaveBeenCalled()
  })

  it('should not call redirect to author page url if req.path does not contains /blog/author', () => {
    req.url = '/author/test/'

    redirectToCorrectAuthorUrl(req, res, next)

    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})

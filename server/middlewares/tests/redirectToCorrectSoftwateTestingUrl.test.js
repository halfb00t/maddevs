import redirectToCorrectSoftwareTestingUrl from '../redirectToCorrectSoftwateTestingUrl'

describe('redirectToCorrectSoftwareTestingUrl middleware', () => {
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

  it('should correctly call redirect to software-testing page url if req.path contain /qa-software-testing/', () => {
    req.url = '/qa-software-testing/test/'

    redirectToCorrectSoftwareTestingUrl(req, res, next)

    expect(res.redirect).toHaveBeenCalledWith(301, '/software-testing/test/')
    expect(next).not.toHaveBeenCalled()
  })

  it('should not call redirect to software-testing page url if req.path does not contains /qa-software-testing/', () => {
    req.url = '/software-testing/test/'

    redirectToCorrectSoftwareTestingUrl(req, res, next)

    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})

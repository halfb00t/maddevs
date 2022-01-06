import redirectToRuCareerPostUrl from '../redirectToRuCareerPostUrl'

describe('redirectToRuCareerPostUrl middleware', () => {
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

  it('should correctly call redirect to russian localization page url if req.path does not contain ru and position is present', () => {
    req.url = '/careers/test/'

    redirectToRuCareerPostUrl(req, res, next)

    expect(res.redirect).toHaveBeenCalledWith(301, '/ru/careers/test/')
    expect(next).not.toHaveBeenCalled()
  })

  it('should not call redirect to russian localization page url if req.path contains ru and position is present', () => {
    req.url = '/ru/careers/test/'

    redirectToRuCareerPostUrl(req, res, next)

    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })

  it('should not call redirect to russian localization page url if req.path contains ru and position is not present', () => {
    req.url = '/ru/careers/'

    redirectToRuCareerPostUrl(req, res, next)

    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})

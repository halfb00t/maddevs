import redirectToCorrectBlogUrl from '../redirectToCorrectBlogUrl'

// TODO remove .co for production
describe('redirectToCorrectBlogUrl', () => {
  const req = {
    headers: {
      host: '123',
    },
    url: 'https://blog.maddevs.co',
  }

  const res = {
    redirect: jest.fn(),
  }

  const next = jest.fn()

  it('not blog host', () => {
    redirectToCorrectBlogUrl(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })

  // TODO remove .co for production
  it('blog host with redirect to main page', () => {
    req.headers.host = 'blog.maddevs.co'
    redirectToCorrectBlogUrl(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.co/insights/blog')
  })

  // TODO remove .co for production
  it('blog host with redirect to specific page', () => {
    req.headers.host = 'blog.maddevs.co'
    req.url = '/projects/home'
    redirectToCorrectBlogUrl(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.co/projects#case-studies')
  })
})

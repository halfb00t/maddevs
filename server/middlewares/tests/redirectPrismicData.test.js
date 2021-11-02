import redirectPrismicData from '../redirectPrismicData'

describe('redirectToPrismicData', () => {
  const req = {
    headers: {
      host: '123',
    },
    url: 'unknown url',
  }

  const res = {
    redirect: jest.fn(),
  }

  const next = jest.fn()

  it('url not found in prismic data', () => {
    redirectPrismicData(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })
})

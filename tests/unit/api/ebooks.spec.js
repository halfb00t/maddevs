import 'regenerator-runtime'
import * as api from '@/api/ebooks'

describe('Ebooks api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data' }))
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      query: success,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  const prismicFailure = {
    api: {
      query: failure,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  it('getCustomPage success', async () => {
    const data = await api.getEbooks(prismic, 'Ebooks')
    expect(data).toEqual({ data: 'data' })
  })

  it('getCustomPage failure', async () => {
    const data = await api.getEbooks(prismicFailure)
    expect(data).toBe(error)
  })
})

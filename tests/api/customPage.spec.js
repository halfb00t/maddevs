import 'regenerator-runtime'
import * as api from '@/api/customPage'

describe('Custom page api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data' }))
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      getByUID: success,
    },
  }

  const prismicFailure = {
    api: {
      getByUID: failure,
    },
  }

  it('getCustomPage success', async () => {
    const data = await api.getCustomPage(prismic, 'uid')
    expect(data).toEqual({ data: 'data' })
  })

  it('getCustomPage failure', async () => {
    const data = await api.getCustomPage(prismicFailure)
    expect(data).toBe(error)
  })
})

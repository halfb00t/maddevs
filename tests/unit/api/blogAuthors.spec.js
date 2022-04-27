import 'regenerator-runtime'
import * as api from '@/api/blogAuthors'

describe('BlogAuthors api methods', () => {
  const error = new Error('error')
  const typeError = new TypeError('Cannot read properties of undefined (reading \'concat\')')
  const success = jest.fn(() => Promise.resolve({ data: 'data', results: 'results' }))
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      getSingle: success,
      query: success,
      getByUID: success,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  const prismicFailure = {
    api: {
      getSingle: failure,
      query: failure,
      getByUID: failure,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  it('getBlogAuthors success', async () => {
    const data = await api.getBlogAuthors(prismic)
    expect(data).toBe('results')
    expect(prismic.api.query).toHaveBeenCalledTimes(1)
  })

  it('getBlogAuthors failure', async () => {
    const data = await api.getBlogAuthors(prismicFailure)
    expect(data).toBe(error)
  })

  it('getBlogAuthor success', async () => {
    const data = await api.getBlogAuthor(prismic, 1)
    expect(data).toEqual({ data: 'data', results: 'results' })
  })

  it('getBlogAuthor failure', async () => {
    const data = await api.getBlogAuthor(prismicFailure)
    expect(data).toBe(error)
  })

  it('getAuthorPosts success', async () => {
    const data = await api.getAuthorPosts(prismic)
    expect(data.join('')).toBe('result')
    expect(prismic.api.query).toHaveBeenCalledTimes(4)
  })

  it('getAuthorPosts failure', async () => {
    const data = await api.getAuthorPosts(prismicFailure)
    expect(data).toEqual(typeError)
  })
})

import 'regenerator-runtime'
import * as api from '@/api/blogTags'

describe('BlogTags api methods', () => {
  const error = new Error('error')
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      query: null,
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

  describe('getBlogTags', () => {
    const success = jest.fn(() => Promise.resolve({ data: 'data', results: [{ tags: ['results'] }] }))
    prismic.api.query = success

    it('success', async () => {
      const data = await api.getBlogTags(prismic)
      expect(data).toEqual(['results'])
    })

    it('failure', async () => {
      const data = await api.getBlogTags(prismicFailure)
      expect(data).toEqual(error)
    })
  })

  describe('getPostsByTag', () => {
    const results = [{
      data: {
        post_author: {
          id: '1',
        },
      },
    }, {
      data: {
        post_author: {},
      },
    }]

    const success = jest.fn(() => Promise.resolve({ data: 'data', results }))
    prismic.api.query = success

    it('success', async () => {
      const payload = 'payload'
      const data = await api.getPostsByTag(prismic, payload)

      expect(data).toHaveLength(1)
      expect(data[0].data?.post_author?.id).toBe('1')
    })

    it('failure', async () => {
      const payload = 'payload'
      const data = await api.getPostsByTag(prismicFailure, payload)
      expect(data).toBe(error)
    })
  })
})

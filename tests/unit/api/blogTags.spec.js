import 'regenerator-runtime'
import * as api from '@/api/blogTags'
import { getBlogPosts } from '@/api/blog'

jest.mock('@/api/blog', () => ({ getBlogPosts: jest.fn() }))
const tags = ['tag1', 'tag2']

describe('getBlogTags', () => {
  const response = [{ tags }]
  getBlogPosts.mockImplementation(() => Promise.resolve(response))
  const prismic = jest.fn()

  it('success', async () => {
    const data = await api.getBlogTags(prismic)
    expect(data).toEqual(['tag1', 'tag2'])
  })

  it('failure', async () => {
    const error = new Error('Test error')
    getBlogPosts.mockImplementation(() => Promise.reject(error))
    const result = await api.getBlogTags(prismic)
    expect(result).toBe(error)
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

  const prismic = {
    api: {
      query: success,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  it('success', async () => {
    const payload = 'payload'
    const data = await api.getPostsByTag(prismic, payload)

    expect(data).toHaveLength(1)
    expect(data[0].data?.post_author?.id).toBe('1')
  })

  it('failure', async () => {
    const error = new Error('Test error')
    const failure = jest.fn(() => Promise.reject(error))
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
    const payload = 'payload'
    const data = await api.getPostsByTag(prismicFailure, payload)
    expect(data).toBe(error)
  })
})

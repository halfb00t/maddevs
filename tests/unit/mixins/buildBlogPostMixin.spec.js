import 'regenerator-runtime'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Post from '@/pages/blog/_uid'
import buildBlogPostMixin from '@/mixins/buildBlogPostMixin'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('~/helpers/generatorUid')

const blogPost = {
  type: 'post',
  id: 'id',
  uid: 'uid',
  tags: [],
  recommendedPosts: [
    {
      uid: 'post-1',
      data: {
        post_author: {
          id: 'author-1',
        },
      },
    },
    {
      uid: 'post-2',
      data: {
        post_author: {
          id: 'author-2',
        },
      },
    },
    {
      uid: 'post-3',
      data: {
        post_author: {
          id: 'author-3',
        },
      },
    },
    {
      uid: 'post-4',
      data: {
        post_author: {
          id: 'author-4',
        },
      },
    },
  ],
  data: {
    title: [
      {
        spans: [],
        text: 'Title',
        type: 'heading1',
      },
    ],
    subtitle: [
      {
        spans: [],
        text: 'Subtitle',
        type: 'heading2',
      },
    ],
    featured_image: {
      url: 'url?auto&w=200&h=300',
    },
    table_of_contents: [],
    body: [],
    post_author: {
      uid: 'author-uid',
    },
    schema_org_snippets: {
      single_snippet: [
        {
          text: 'Snippet',
        },
      ],
    },
    date: '2020-08-25T05:57:46+0000',
    meta_title: [
      {
        spans: [],
        text: 'Meta title',
        type: 'heading2',
      },
    ],
    meta_description: [
      {
        spans: [],
        text: 'Meta description',
        type: 'heading2',
      },
    ],
  },
}

const storeObj = {
  actions: {
    getBlogPost: jest.fn(),
    getBlogAuthor: jest.fn(),
    getBlogAuthors: jest.fn(),
  },
}

const store = new Vuex.Store({ ...storeObj })

const mocks = {
  $prismic: {
    asText: text => text[0].text,
  },
  $store: {
    dispatch: jest.fn().mockResolvedValue(blogPost),
  },
}

const stubs = ['PostView']

describe('Build blog post mixin', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
      mixins: [buildBlogPostMixin()],
    })

    jest.clearAllMocks()
  })

  it('asyncData method should call getBlogPost with \'post\' type', async () => {
    const callObject = {
      $prismic: mocks.$prismic,
      store: mocks.$store,
      params: { uid: '1' },
      error: jest.fn(),
    }

    await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(callObject.store.dispatch).toHaveBeenNthCalledWith(1, 'getBlogPost', { type: 'post', uid: callObject.params.uid })
    expect(callObject.store.dispatch).toHaveBeenNthCalledWith(2, 'getBlogAuthor', blogPost.data.post_author.uid)
  })

  it('asyncData method should call getBlogPost with \'customer_university\' type', async () => {
    const localWrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
      mixins: [buildBlogPostMixin('customer_university')],
    })
    const callObject = {
      $prismic: mocks.$prismic,
      store: mocks.$store,
      params: { uid: '1' },
      error: jest.fn(),
    }

    await localWrapper.vm.$options.asyncData.call(store, callObject)
    expect(callObject.store.dispatch).toHaveBeenNthCalledWith(1, 'getBlogPost', { type: 'customer_university', uid: callObject.params.uid })
    expect(callObject.store.dispatch).toHaveBeenNthCalledWith(2, 'getBlogAuthor', blogPost.data.post_author.uid)
  })

  it('asyncData method should not call getBlogAuthor', async () => {
    const callObject = {
      $prismic: mocks.$prismic,
      store: {
        dispatch: jest.fn().mockResolvedValue({
          ...blogPost,
          data: {
            ...blogPost.data,
            post_author: null,
          },
        }),
      },
      params: { uid: '1' },
      error: jest.fn(),
    }

    await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(callObject.store.dispatch).toHaveBeenNthCalledWith(1, 'getBlogPost', { type: 'post', uid: callObject.params.uid })
    expect(callObject.store.dispatch).not.toHaveBeenCalledTimes(2)
  })

  it('asyncData method should return correct data', async () => {
    const callObject = {
      $prismic: mocks.$prismic,
      store: mocks.$store,
      params: { uid: '1' },
      error: jest.fn(),
    }

    const result = await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(result.post.date).toBe('Aug 25, 2020')
    expect(result.post.recommendedPosts).toHaveLength(3)
    expect(result.openGraphUrl).toContain(`/blog/${callObject.params.uid}/`)
  })

  it('asyncData method should get 404 error', async () => {
    const callObject = {
      params: {
        uid: '1',
      },
      error: jest.fn(),
    }

    await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(callObject.error).toHaveBeenCalledTimes(1)
  })

  it('imageWithoutCrop computed method should return correct path to image', async () => {
    const callObject = {
      $prismic: mocks.$prismic,
      store: mocks.$store,
      params: { uid: '1' },
      error: jest.fn(),
    }
    const data = await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(wrapper.vm.$options.computed.imageWithoutCrop.call(data)).toBe('url')
  })

  it('head method should return correct values', async () => {
    const callObject = {
      $prismic: mocks.$prismic,
      store: mocks.$store,
      params: { uid: '1' },
      error: jest.fn(),
    }
    const data = await wrapper.vm.$options.asyncData.call(store, callObject)
    const imageWithoutCrop = wrapper.vm.$options.computed.imageWithoutCrop.call(data)
    const metaData = wrapper.vm.$options.head.call({
      ...data,
      imageWithoutCrop,
    })

    expect(metaData.title).toBe(data.post.metaTitle)
    expect(metaData.meta.find(({ property }) => property === 'og:title').content).toBe(data.post.metaTitle)
    expect(metaData.meta.find(({ property }) => property === 'og:description').content).toBe(data.post.metaDescription)
    expect(metaData.meta.find(({ property }) => property === 'og:image').content).toBe(imageWithoutCrop)
    expect(metaData.meta.find(({ property }) => property === 'og:url').content).toBe(data.openGraphUrl)
  })

  it('head method should return default values', async () => {
    const metaData = wrapper.vm.$options.head.call({
      post: {},
      openGraphUrl: '',
      schemaOrgSnippet: '',
    })

    expect(metaData.title).toBe('')
    expect(metaData.meta.find(({ property }) => property === 'og:title').content).toBe('')
    expect(metaData.meta.find(({ property }) => property === 'og:description').content).toBe('')
    expect(metaData.meta.find(({ property }) => property === 'og:image').content).toBe('/favicon.ico')
    expect(metaData.meta.find(({ property }) => property === 'og:url').content).toBe('')
  })
})

import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/blog'

jest.mock('@/api/blog', () => (
  {
    getHomePageContent: jest.fn(() => 'test'),
    getBlogPosts: jest.fn(() => 'test'),
    getCUPosts: jest.fn(() => 'test'),
    getCustomerUniversityMaster: jest.fn(() => ({
      featured_cu: {
        uid: '123',
      },
    })),
    getCustomerUniversityFeaturedPost: jest.fn(() => 'test'),
  }
))

mutations.$prismic = {
  asText: jest.fn(() => ''),
}

actions.$prismic = {
  api: jest.fn(),
}

describe('Blog module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.homePageContent).toEqual({})
    expect(state.customerContent).toEqual({})
    expect(state.featuredCUPost).toBeNull()
    expect(state.posts).toEqual([])
    expect(state.CUPosts).toEqual([])
    expect(state.featuredPost).toBeNull()
    expect(state.postsLoaded).toBeFalsy()
    expect(state.showContentLocker).toBeTruthy()
  })
})

describe('Blog module mutations', () => {
  it('should correct mutate state after calling SET_BLOG_PAGE_CONTENT mutation', () => {
    const state = defaultState()

    const data = {
      headline: [{ text: 'Headline' }],
      description: [{ text: 'Description' }],
      recent_posts_banner: 'Banner',
      banner_link: 'link',
      image: {
        url: 'url',
      },
    }

    mutations.SET_BLOG_PAGE_CONTENT(state, data)

    expect(state).toEqual({
      ...defaultState(),
      homePageContent: {
        banner: 'Banner',
        bannerLink: 'link',
        description: 'Description',
        headline: 'Headline',
        image: 'url',
      },
    })
  })

  it('should correct mutate state after calling SET_CUSTOMER_CONTENT mutation', () => {
    const state = defaultState()

    const data = 'Data'

    mutations.SET_CUSTOMER_CONTENT(state, data)

    expect(state).toEqual({
      ...defaultState(),
      customerContent: data,
    })
  })

  it('should correct mutate state after calling SET_CU_POSTS mutation', () => {
    const state = defaultState()

    const posts = 'Data'

    mutations.SET_CU_POSTS(state, posts)

    expect(state).toEqual({
      ...defaultState(),
      CUPosts: posts,
    })
  })

  it('should correct mutate state after calling SET_FEATURED_CUSTOMER_POST mutation', () => {
    const state = defaultState()

    const post = {
      date: '12-02-2021',
    }

    mutations.SET_FEATURED_CUSTOMER_POST(state, post)

    expect(state).toEqual({
      ...defaultState(),
      featuredCUPost: post,
    })
  })

  it('should correct mutate state after calling SET_POSTS mutation', () => {
    const state = defaultState()

    const data = [{
      tags: ['Featured post'],
    }]

    mutations.SET_POSTS(state, data)

    expect(state).toEqual({
      ...defaultState(),
      posts: data,
      featuredPost: data[0],
    })
  })

  it('should correct mutate state after calling SET_POSTS_LOADED mutation', () => {
    const state = defaultState()

    const value = false

    mutations.SET_POSTS_LOADED(state, value)

    expect(state).toEqual({
      ...defaultState(),
      postsLoaded: value,
    })
  })

  it('should correct mutate state after calling SET_CONTENT_LOCKER mutation', () => {
    const state = defaultState()

    const value = false

    mutations.SET_SHOW_CONTENT_LOCKER(state, value)

    expect(state).toEqual({
      ...defaultState(),
      showContentLocker: value,
    })
  })
})

describe('Blog module actions', () => {
  it('should correctly called getHomePageContent without postsCategory', async () => {
    const store = {
      state: {
        ...defaultState(),
        homePageContent: {
          categories: [
            {
              title: '123',
            },
          ],
        },
      },
      commit: jest.fn(),
    }

    await actions.getHomePageContent(store)

    expect(store.commit).toHaveBeenCalledWith('SET_BLOG_PAGE_CONTENT', 'test')
  })

  it('should correctly called getHomePageContent with postsCategory', async () => {
    const store = {
      state: {
        ...defaultState(),
        postsCategory: {},
      },
      commit: jest.fn(),
    }

    await actions.getHomePageContent(store)
    expect(store.commit).toHaveBeenCalledWith('SET_BLOG_PAGE_CONTENT', 'test')
  })

  it('should correctly called getBlogPosts', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getBlogPosts(store)
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS', 'test')
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS_LOADED', true)
  })

  it('should correctly called getCustomerUniversityContent', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getCustomerUniversityContent(store)
    expect(store.commit).toHaveBeenCalledWith('SET_CUSTOMER_CONTENT', {
      featured_cu: {
        uid: '123',
      },
    })
    expect(store.commit).toHaveBeenCalledWith('SET_FEATURED_CUSTOMER_POST', 'test')
  })

  it('should correctly called getCustomerUniversityPosts', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getCustomerUniversityPosts(store)
    expect(store.commit).toHaveBeenCalledWith('SET_CU_POSTS', 'test')
  })

  it('should correctly called changeContentLockerDisplay', () => {
    const store = {
      commit: jest.fn(),
      state: defaultState(),
    }

    const value = false

    actions.changeContentLockerDisplay(store, value)
    expect(store.commit).toHaveBeenCalledWith('SET_SHOW_CONTENT_LOCKER', value)
  })
})

describe('Blog module getters', () => {
  const state = defaultState()

  it('homePageContent', () => {
    expect(getters.homePageContent(state)).toBe(state.homePageContent)
  })

  it('customerContent', () => {
    expect(getters.customerContent(state)).toBe(state.customerContent)
  })

  it('featuredCUPost', () => {
    expect(getters.featuredCUPost(state)).toBe(state.featuredCUPost)
  })

  it('allPosts', () => {
    expect(getters.allPosts(state)).toBe(state.posts)
  })

  it('CUPosts', () => {
    expect(getters.CUPosts(state)).toEqual(state.CUPosts)
  })

  it('featuredPost', () => {
    expect(getters.featuredPost(state)).toBe(state.featuredPost)
  })

  it('postsLoaded', () => {
    expect(getters.postsLoaded(state)).toBe(state.postsLoaded)
  })

  it('recentPosts', () => {
    state.posts = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(getters.recentPosts(state)).toEqual([1, 2, 3, 4, {
      banner: {
        url: '#',
      },
      id: 'banner',
      link: {
        link_type: 'Web',
        target: '_self',
        url: '#',
      },
    }, 5])
  })

  it('recentPosts without banner', () => {
    state.posts = []
    expect(getters.recentPosts(state)).toEqual([])
  })

  it('showContentLocker', () => {
    expect(getters.showContentLocker(state)).toBe(state.showContentLocker)
  })
})

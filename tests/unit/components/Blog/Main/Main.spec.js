import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Main from '@/components/Blog/Main/Main'
import * as homeContent from '../../../__mocks__/homePageContent'
import allPosts from '../../../__mocks__/allPosts'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
    api: {
      getSingle: () => ({ data: {} }),
    },
  },
  getBlogAuthors: jest.fn(),
  $getMediaFromS3: () => {},
}

const stubs = ['NuxtLink', 'FeaturedPost', 'CustomerUniversitySection', 'PostCard']

const store = {
  getters: {
    filteredPosts: () => allPosts,
    featuredPost: () => allPosts[0],
    allPosts: () => allPosts,
    allAuthors: () => [{}],
    postsLoaded: () => true,
    postsCategory: jest.fn(),
    recentPosts: jest.fn(),
    featuredCUPost: jest.fn(),
    customerContent: () => {},
    postsPage: () => 2,
    homePageContent: () => homeContent.default,
  },
  actions: {
    getHomePageContent: jest.fn(),
    getBlogPosts: () => jest.fn(),
    getCustomerUniversityContent: jest.fn(),
    getBlogAuthors: jest.fn(),
  },
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})

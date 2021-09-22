import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BlogHeader from '@/components/Blog/Main/BlogHeader'
import allPosts from '../../../__mocks__/allPosts'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  $getMediaFromS3: () => {},
}

const stubs = ['NuxtLink']

const store = {
  getters: {
    featuredPost: () => allPosts[0],
    postsLoaded: () => true,
    allAuthors: jest.fn(),
  },
}

describe('BlogHeader component', () => {
  it('should render correctly', () => {
    const { container } = render(BlogHeader, {
      stubs,
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})

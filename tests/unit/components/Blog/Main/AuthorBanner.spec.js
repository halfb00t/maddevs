import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import AuthorBanner from '@/components/Blog/Main/AuthorBanner'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
        header: {
          url: '',
          alt: '',
          dimensions: {},
        },
      },
    }),
    authorPosts: () => [
      {
        tags: ['Tag'],
      },
    ],
  },
}

const directives = {
  'lazy-load': () => {},
}

describe('AuthorBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(AuthorBanner, {
      mocks,
      localVue,
      store,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with empty array', () => {
    store.getters.authorPosts = () => []
    const wrapper = shallowMount(AuthorBanner, {
      mocks,
      localVue,
      store,
      directives,
    })

    expect(wrapper.vm.tags).toEqual([])
  })
})

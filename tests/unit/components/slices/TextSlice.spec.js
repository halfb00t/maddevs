import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import TextSlice from '@/components/slices/TextSlice'

const slice = {
  primary: {
    text: [
      {
        type: 'heading1',
        text: 'sample text',
      },
    ],
  },
}

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  $route: {
    name: 'test-route',
    params: {
      uid: 'uid',
    },
  },
  $router: {
    currentRoute: {
      path: '/blog-post-title',
    },
  },
}

const store = {
  getters: {
    postsCategory: jest.fn(),
    postsPage: () => 2,
    allAuthors: jest.fn(),
  },
  actions: {
    changePostsCategory: jest.fn(),
    getMorePosts: jest.fn(),
  },
}

Object.defineProperty(document, 'execCommand', { value: jest.fn() })

describe('text slice component', () => {
  it('is a Vue instance', () => {
    const { container } = render(TextSlice, {
      props: {
        slice,
        htmlSerializer: () => '',
      },
      stubs: ['PrismicRichText'],
    })

    expect(container).toMatchSnapshot()
  })

  it('by default prop htmlSerializer has func which return null', () => {
    const wrapper = shallowMount(TextSlice, {
      propsData: {
        slice,
      },
      stubs: ['PrismicRichText'],
    })
    expect(wrapper.vm.htmlSerializer()).toBeNull()
  })
})

describe('text slice component copyAnchorLink', () => {
  const wrapper = shallowMount(TextSlice, {
    propsData: {
      slice,
    },
    mocks,
    store,
    stubs: ['PrismicRichText'],
  })

  it('if has attr data-id in btn will return valid link', () => {
    const event = {
      target: {
        getAttribute: () => 'blog-post-title',
        nextElementSibling: document.createElement('div'),
      },
    }
    const result = wrapper.vm.copyAnchorLink(event)
    expect(result).toBe('http://localhost/blog-post-title#blog-post-title')
  })

  it('if not have attr data-id in btn will return null', () => {
    const event = {
      target: {
        getAttribute: () => undefined,
        nextElementSibling: document.createElement('div'),
      },
    }
    const result = wrapper.vm.copyAnchorLink(event)
    expect(result).toBeNull()
  })
})

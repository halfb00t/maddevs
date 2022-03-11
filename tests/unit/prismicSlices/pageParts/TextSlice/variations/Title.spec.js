import { render, screen } from '@testing-library/vue'

import { shallowMount } from '@vue/test-utils'
import Title from '@/prismicSlices/pageParts/TextSlice/variations/Title'

const props = {
  title: 'test',
  maxWidth: '500px',
  tag: 'h1',
  position: 'center',
  size: '--16-px',
}

const mocks = {
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

Object.defineProperty(document, 'execCommand', { value: jest.fn() })

describe('Title with data', () => {
  it('should render correctly with data', () => {
    const { container } = render(Title, {
      props,
    })
    expect(screen.getByText('test')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

describe('text component copyAnchorLink', () => {
  const wrapper = shallowMount(Title, {
    props,
    mocks,
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

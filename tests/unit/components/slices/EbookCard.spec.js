import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EbookCard from '@/components/slices/EbookCard'

const props = {
  title: 'Test title',
  subtitle: 'Test subtitle',
  link: 'pricing-strategies',
  image: {
    url: 'img.jpg',
    alt: 'image',
  },
}

const directives = {
  'lazy-load': jest.fn(),
}

describe('EbookCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(EbookCard, {
      propsData: props,
      directives,
      stubs: {
        NuxtLink: {
          render(h) { return h('a') },
        },
      },
    })

    expect(screen.queryByTestId('ebook-card')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object from image props', () => {
    const wrapper = shallowMount(EbookCard, {
      propsData: props,
      directives,
      stubs: {
        NuxtLink: {
          render(h) { return h('a') },
        },
      },
    })

    expect(wrapper.vm.$options.props.image.default.call()).toEqual({})
  })
})

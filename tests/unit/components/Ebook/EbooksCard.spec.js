import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EbooksCard from '@/components/Ebook/EbooksCard'

const props = {
  title: 'Test',
  subtitle: 'Subtitle',
  image: {
    url: 'img.jpg',
    alt: 'img',
  },
  link: 'test-link',
}

const stubs = ['NuxtLink']

describe('EbooksCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(EbooksCard, {
      props,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object on props', () => {
    const wrapper = shallowMount(EbooksCard, {
      stubs,
    })

    expect(wrapper.vm.$options.props.image.default.call()).toEqual({})
  })
})

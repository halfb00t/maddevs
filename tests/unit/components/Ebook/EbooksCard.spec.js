import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import EbooksCard from '@/components/Ebook/EbooksCard'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  title: 'Test',
  subtitle: 'Subtitle',
  image: {
    url: 'img.jpg',
    alt: 'img',
  },
  link: 'test-link',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const stubs = ['NuxtLink']

describe('EbooksCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(EbooksCard, {
      props,
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object on props', () => {
    const wrapper = shallowMount(EbooksCard, {
      stubs,
      localVue,
    })

    expect(wrapper.vm.$options.props.image.default.call()).toEqual({})
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import LittleCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/LittleCard'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  icon: {
    url: 'img.jpg',
    alt: 'Icon',
  },

  title: 'Test',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BigCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(LittleCard, {
      propsData: props,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object from icon props', () => {
    const wrapper = shallowMount(LittleCard, {
      localVue,
    })

    expect(wrapper.vm.$options.props.icon.default.call()).toEqual({})
  })
})

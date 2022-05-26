import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import LittleCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/LittleCard'

const props = {
  icon: {
    url: 'img.jpg',
    alt: 'Icon',
  },

  title: 'Test',
}

const mocks = {
  'lazy-load': jest.fn(),
}

describe('BigCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(LittleCard, {
      propsData: props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object from icon props', () => {
    const wrapper = shallowMount(LittleCard, {
      mocks,
    })

    expect(wrapper.vm.$options.props.icon.default.call()).toEqual({})
  })
})

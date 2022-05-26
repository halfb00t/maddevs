import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import BigCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/BigCard'

const props = {
  icon: {
    url: 'img.jpg',
    alt: 'Icon',
  },

  title: 'Test',

  description: 'Test description',

  oneCards: true,
}

const mocks = {
  'lazy-load': jest.fn(),
}

describe('BigCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(BigCard, {
      propsData: props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object from icon props', () => {
    const wrapper = shallowMount(BigCard, {
      mocks,
    })

    expect(wrapper.vm.$options.props.icon.default.call()).toEqual({})
  })
})

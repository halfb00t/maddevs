import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load/lib/module'
import ToolsGrid from '@/prismicSlices/pageParts/TechnologiesAndTools/components/ToolsGrid'

const props = {
  activeCategory: 'Test category',
  tools: [
    {
      label: 'Test',
      category: 'Test category',
      icon: 'img.jpg',
    },
  ],
}

const mocks = {
  $getMediaFromS3: jest.fn(),
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('ToolsGrid component', () => {
  it('should correctly render component', () => {
    const { container } = render(ToolsGrid, {
      localVue,
      propsData: props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty array from tools props', () => {
    const wrapper = shallowMount(ToolsGrid, {
      localVue,
      mocks,
      propsData: props,
    })

    expect(wrapper.vm.$options.props.tools.default.call()).toEqual([])
  })
})

import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load'
import ToolsCategories from '@/prismicSlices/pageParts/TechnologiesAndTools/components/ToolsCategories'

const props = {
  activeCategory: 'Test category',
  categories: [
    {
      label: 'Test',
      value: 'Test category',
      color: 'black',
    },
  ],
}

const mocks = {
  $getMediaFromS3: jest.fn(),
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('ToolsCategoris component', () => {
  it('should correctly render component', () => {
    const { container } = render(ToolsCategories, {
      propsData: props,
      localVue,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work setActiveCategory', () => {
    const wrapper = shallowMount(ToolsCategories, {
      propsData: props,
      localVue,
      mocks,
    })

    const button = wrapper.find('.tools-categories__checkbox')
    button.trigger('click')
    expect(wrapper.emitted().selectCategory[0]).toEqual(['Test category'])
    expect(wrapper.vm.$options.props.categories.default.call()).toEqual([])
  })
})

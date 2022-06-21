import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load'
import ToolsCategories from '@/prismicSlices/pageParts/TechnologiesAndTools/components/ToolsCategories'

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

describe('ToolsCategoris component', () => {
  it('should correctly render component', () => {
    const { container } = render(ToolsCategories, {
      propsData: props,
      localVue,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

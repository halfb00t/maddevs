import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Requirements from '@/components/Cases/nambataxi/Requirements'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['Picture', 'CardTechSolution', 'TextQuote']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Requirements component', () => {
  it('should render correctly', () => {
    const { container } = render(Requirements, {
      stubs,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import OngoingProgress from '@/components/Cases/citycam/OngoingProgress'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('OngoingProgress component', () => {
  it('should render correctly', () => {
    const { container } = render(OngoingProgress, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

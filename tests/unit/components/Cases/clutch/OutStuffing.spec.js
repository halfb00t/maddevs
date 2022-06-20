import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import OutStuffing from '@/components/Cases/clutch/OutStuffing'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['OutStuffing', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('OutStuffing component', () => {
  it('should render correctly', () => {
    const { container } = render(OutStuffing, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
        'lazy-load': () => {},
      },
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

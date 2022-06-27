import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import About from '@/components/Cases/clutch/About'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

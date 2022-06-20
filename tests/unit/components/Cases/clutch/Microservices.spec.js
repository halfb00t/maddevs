import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Microservices from '@/components/Cases/clutch/Microservices'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Microservices component', () => {
  it('should render correctly', () => {
    const { container } = render(Microservices, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import PowerSupply from '@/components/Cases/citycam/PowerSupply'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['LottieMad']

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('PowerSupply component', () => {
  it('should render correctly', () => {
    const { container } = render(PowerSupply, {
      stubs,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

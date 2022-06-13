import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import DevOps from '@/components/Cases/clutch/DevOps'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['LottieMad', 'Picture', 'NuxtLink']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('DevOps component', () => {
  it('should render correctly', () => {
    const { container } = render(DevOps, {
      stubs,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

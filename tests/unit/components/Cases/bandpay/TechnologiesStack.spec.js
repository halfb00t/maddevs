import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import TechnologiesStack from '@/components/Cases/bandpay/TechnologiesStack'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BandPay TechnologiesStack component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologiesStack, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TechnologiesStack, {
      mocks,
      localVue,
    })

    expect(screen.getByText(/Technology stack/i).className).toBeTruthy()
  })
})

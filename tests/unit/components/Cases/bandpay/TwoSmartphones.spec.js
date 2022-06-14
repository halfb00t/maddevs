import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import TwoSmartphones from '@/components/Cases/bandpay/TwoSmartphones'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BandPay TwoSmartphones component', () => {
  it('should render correctly', () => {
    const { container } = render(TwoSmartphones, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TwoSmartphones, {
      mocks,
      localVue,
    })

    expect(screen.getByText(/To deposit funds and start a project/i).className).toBeTruthy()
  })

  it('should render image', () => {
    render(TwoSmartphones, {
      mocks,
      localVue,
    })

    const image = screen.getByTestId('test-picture-img')
    expect(image.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
    expect(image.getAttribute('alt')).toBe('The BandPay Mobile Applications.')
  })
})

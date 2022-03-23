import { render, screen } from '@testing-library/vue'
import TwoSmartphones from '@/components/Cases/bandpay/TwoSmartphones'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay TwoSmartphones component', () => {
  it('should render correctly', () => {
    const { container } = render(TwoSmartphones, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TwoSmartphones, {
      mocks,
      directives,
    })

    expect(screen.getByText(/To deposit funds and start a project/i).className).toBeTruthy()
  })

  it('should render image', () => {
    render(TwoSmartphones, {
      mocks,
      directives,
    })

    const image = screen.getByTestId('test-picture-img')
    expect(image.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
    expect(image.getAttribute('alt')).toBe('The BandPay Mobile Applications.')
  })
})

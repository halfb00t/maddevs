import { render, screen } from '@testing-library/vue'
import TechnologiesStack from '@/components/Cases/bandpay/TechnologiesStack'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay TechnologiesStack component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologiesStack, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TechnologiesStack, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Technology stack/i).className).toBeTruthy()
  })
})

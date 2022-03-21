import { render, screen } from '@testing-library/vue'
import WhatIsBackend from '@/components/Cases/bandpay/WhatIsBackend'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay WhatIsBackend component', () => {
  it('should render correctly', () => {
    const { container } = render(WhatIsBackend, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(WhatIsBackend, {
      mocks,
      directives,
    })

    expect(screen.getByText(/What is in the backend/i).className).toBeTruthy()
  })
})

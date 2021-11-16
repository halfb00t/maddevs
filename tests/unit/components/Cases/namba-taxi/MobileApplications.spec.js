import { render } from '@testing-library/vue'
import MobileApplications from '@/components/Cases/nambataxi/MobileApplications'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture', 'TextQuote']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('MobileApplications component', () => {
  it('should render correctly', () => {
    const { container } = render(MobileApplications, {
      stubs,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})

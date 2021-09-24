import { render } from '@testing-library/vue'
import WhyClutch from '@/components/Cases/clutch/WhyClutch'
import '../../../__mocks__/intersectionObserverMock'

describe('WhyClutch component', () => {
  it('should render correctly', () => {
    const { container } = render(WhyClutch)

    expect(container).toMatchSnapshot()
  })
})

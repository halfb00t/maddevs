import { render } from '@testing-library/vue'
import FaultTolerance from '@/components/Cases/nambataxi/FaultTolerance'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['LottieMad', 'Picture', 'StatisticCard', 'LottieMad', 'StatisticCard']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}
const directives = {
  'lazy-load': () => {},
}

describe('FaultTolerance component', () => {
  it('should render correctly', () => {
    const { container } = render(FaultTolerance, {
      stubs,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})

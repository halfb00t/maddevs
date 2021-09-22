import { render } from '@testing-library/vue'
import KeyMetrics from '@/components/Careers/KeyMetrics'

const stubs = ['MetricCard']

const mocks = {
  $t: () => 'translated',
}

describe('KeyMetrics component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyMetrics, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

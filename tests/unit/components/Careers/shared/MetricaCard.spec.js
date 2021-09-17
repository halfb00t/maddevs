import { render } from '@testing-library/vue'
import KeyMetrics from '@/components/Careers/KeyMetrics'

const mocks = {
  $t: () => 'translated',
}

describe('KeyMetrics component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyMetrics, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

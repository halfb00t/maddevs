import { render } from '@testing-library/vue'
import Benefits from '@/components/Careers/Benefits'

const mocks = {
  $t: () => 'translated',
}

describe('Benefits component', () => {
  it('should render correctly', () => {
    const { container } = render(Benefits, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import FuturePlans from '@/components/Cases/itc/FuturePlans'

describe('FuturePlans component', () => {
  it('should render correctly', () => {
    const { container } = render(FuturePlans)

    expect(container).toMatchSnapshot()
  })
})

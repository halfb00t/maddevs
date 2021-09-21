import { render } from '@testing-library/vue'
import SavingTime from '@/components/Cases/itc/SavingTime'

describe('SavingTime component', () => {
  it('should render correctly', () => {
    const { container } = render(SavingTime)

    expect(container).toMatchSnapshot()
  })
})

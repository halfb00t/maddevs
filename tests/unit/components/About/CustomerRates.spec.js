import { render, screen } from '@testing-library/vue'
import CustomerRates from '@/components/About/CustomerRates'

describe('CustomerRates', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerRates)
    expect(screen.getByText('10M+')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

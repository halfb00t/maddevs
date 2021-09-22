import { render, screen } from '@testing-library/vue'
import PhasInfrastructureAsCode from '@/components/Cases/veeqo/PhasInfrastructureAsCode'

const stubs = ['TextQuote']

describe('PhasInfrastructureAsCode component', () => {
  it('should render correctly', () => {
    const { container } = render(PhasInfrastructureAsCode, {
      stubs,
    })

    expect(screen.getByText('Phase 6: Infrastructure as Code (IaC)')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

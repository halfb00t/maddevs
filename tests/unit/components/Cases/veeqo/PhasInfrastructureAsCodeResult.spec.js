import { render, screen } from '@testing-library/vue'
import PhasInfrastructureAsCodeResult from '@/components/Cases/veeqo/PhasInfrastructureAsCodeResult'

const stubs = ['CardResult']

describe('PhasInfrastructureAsCodeResult component', () => {
  it('should render correctly', () => {
    const { container } = render(PhasInfrastructureAsCodeResult, {
      stubs,
      directives: {
        prlx: () => {},
      },
    })

    expect(screen.getByText('Key results')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

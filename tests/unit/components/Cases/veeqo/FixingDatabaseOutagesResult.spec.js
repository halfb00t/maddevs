import { render, screen } from '@testing-library/vue'
import FixingDatabaseOutagesResult from '@/components/Cases/veeqo/FixingDatabaseOutagesResult'

describe('FixingDatabaseOutagesResult component', () => {
  it('should render correctly', () => {
    const { container } = render(FixingDatabaseOutagesResult)

    expect(screen.getByText('ReadIOPS')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

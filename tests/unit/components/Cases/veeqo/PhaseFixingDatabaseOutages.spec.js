import { render, screen } from '@testing-library/vue'
import PhaseFixingDatabaseOutages from '@/components/Cases/veeqo/PhaseFixingDatabaseOutages'

const stubs = ['FixingDatabaseOutagesResult', 'CardTechSolution']

const directives = {
  'lazy-load': () => {},
}

describe('PhaseFixingDatabaseOutages component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseFixingDatabaseOutages, {
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    expect(screen.getByText('Phase 1: Fixing database outages')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

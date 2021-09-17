import { render, screen } from '@testing-library/vue'
import PlansForSimilarProjects from '@/components/Cases/yourcast/PlansForSimilarProjects'

describe('PlansForSimilarProjects component', () => {
  it('should render correctly', () => {
    const { container } = render(PlansForSimilarProjects)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PlansForSimilarProjects)
    expect(screen.getByText(/Plans for similar projects/i).className).toContain('case_title_h3')
  })
})

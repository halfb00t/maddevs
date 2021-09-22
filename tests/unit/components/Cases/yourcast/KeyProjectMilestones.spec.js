import { render, screen } from '@testing-library/vue'
import KeyProjectMilestones from '@/components/Cases/yourcast/KeyProjectMilestones'

describe('KeyProjectMilestones component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyProjectMilestones)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(KeyProjectMilestones)
    expect(screen.getByText(/Key project milestones/i)).toBeTruthy()
  })
})

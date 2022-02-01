import { render, screen } from '@testing-library/vue'
import KeyProjectMilestones from '@/components/Cases/yourcast/KeyProjectMilestones'

const stubs = ['OutStuffing', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('KeyProjectMilestones component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyProjectMilestones, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
        'lazy-load': () => {},
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(KeyProjectMilestones, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
        'lazy-load': () => {},
      },
    })
    expect(screen.getByText(/Key project milestones/i)).toBeTruthy()
  })
})

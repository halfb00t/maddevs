import { render, screen } from '@testing-library/vue'
import Team from '@/components/Cases/godee/Team.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Team, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Meet the team/i).className).toContain('case_title_h2')
  })
})

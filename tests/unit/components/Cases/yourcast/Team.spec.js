import { render, screen } from '@testing-library/vue'
import Team from '@/components/Cases/yourcast/Team'

const stubs = ['Picture']

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(Team, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })
    expect(screen.getByText(/Meet the team/i).className).toContain('case_title_h2')
  })
})

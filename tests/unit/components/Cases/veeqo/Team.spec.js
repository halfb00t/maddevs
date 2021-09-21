import { render, screen } from '@testing-library/vue'
import Team from '@/components/Cases/veeqo/Team'

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

    expect(screen.getByText('Meet the team')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

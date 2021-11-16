import { render, screen } from '@testing-library/vue'
import TeamNambaTaxi from '@/components/Cases/nambataxi/TeamNambaTaxi'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

const stubs = ['Picture']

describe('TeamNambaTaxi component', () => {
  it('should render correctly', () => {
    const { container } = render(TeamNambaTaxi, {
      mocks,
      stubs,
      directives,
    })

    expect(screen.getByText('Meet the team')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/vue'
import HighLevelOverview from '@/components/Cases/veeqo/HighLevelOverview'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('HighLevelOverview component', () => {
  it('should render correctly', () => {
    const { container } = render(HighLevelOverview, {
      mocks,
      directives: {
        prlx: () => {},
      },
      stubs,
    })

    expect(screen.getByText('Veeqo high-level overview')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

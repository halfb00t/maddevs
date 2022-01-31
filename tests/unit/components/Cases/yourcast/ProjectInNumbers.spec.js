import { render, screen } from '@testing-library/vue'
import ProjectInNumbers from '@/components/Cases/yourcast/ProjectInNumbers'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('ProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectInNumbers, {
      stubs,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(ProjectInNumbers, {
      stubs,
      mocks,
    })
    expect(screen.getByText(/Project in numbers/i).className).toContain('case_title_h2')
  })
})

import { render, screen } from '@testing-library/vue'
import CardProjectInNumbers from '@/components/Cases/yourcast/CardProjectInNumbers'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('CardProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(CardProjectInNumbers, {
      stubs,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardProjectInNumbers, {
      stubs,
      mocks,
    })
    expect(screen.getByText(/viewers per day/i).className).toBeTruthy()
  })
})

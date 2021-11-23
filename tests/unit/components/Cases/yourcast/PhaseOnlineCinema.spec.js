import { render, screen } from '@testing-library/vue'
import PhaseOnlineCinema from '@/components/Cases/yourcast/PhaseOnlineCinema'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['TextQuote']

const mocks = {
  $getMediaFromS3: image => image,
}

describe('PhaseOnlineCinema component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseOnlineCinema, {
      stubs,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseOnlineCinema, {
      stubs,
      mocks,
    })
    expect(screen.getByText(/Phase 1: Online cinema/i).className).toContain('case_title_h2')
  })
})

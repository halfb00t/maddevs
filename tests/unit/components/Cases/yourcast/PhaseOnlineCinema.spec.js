import { render, screen } from '@testing-library/vue'
import PhaseOnlineCinema from '@/components/Cases/yourcast/PhaseOnlineCinema'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['TextQuote']

describe('PhaseOnlineCinema component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseOnlineCinema, {
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseOnlineCinema, {
      stubs,
    })
    expect(screen.getByText(/Phase 1: Online cinema/i).className).toContain('case_title_h2')
  })
})

import { render, screen } from '@testing-library/vue'
import PhaseVideoOnDemand from '@/components/Cases/yourcast/PhaseVideoOnDemand'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: image => image,
}

describe('PhaseVideoOnDemand component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseVideoOnDemand, {
      mocks,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseVideoOnDemand, {
      mocks,
    })
    expect(screen.getByText(/Phase 4: Video on demand/i).className).toContain('case_title_h2')
  })
})

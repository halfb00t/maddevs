import { render, screen } from '@testing-library/vue'
import PhaseRedesignAndOptimisations from '@/components/Cases/yourcast/PhaseRedesignAndOptimisations'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: image => image,
}

describe('PhaseRedesignAndOptimisations component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseRedesignAndOptimisations, {
      mocks,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseRedesignAndOptimisations, {
      mocks,
    })
    expect(screen.getByText(/Phase 3: Redesign & optimisations/i).className).toContain('case_title_h2')
  })
})

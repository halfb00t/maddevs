import { render, screen } from '@testing-library/vue'
import PhaseMovingToKubernetes from '@/components/Cases/veeqo/PhaseMovingToKubernetes'

describe('PhaseMovingToKubernetes component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseMovingToKubernetes)

    expect(screen.getByText('Phase 5. Moving to Kubernetes')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

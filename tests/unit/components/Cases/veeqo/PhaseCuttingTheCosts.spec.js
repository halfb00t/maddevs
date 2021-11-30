import { render, screen } from '@testing-library/vue'
import PhaseCuttingTheCosts from '@/components/Cases/veeqo/PhaseCuttingTheCosts'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('PhaseCuttingTheCosts component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseCuttingTheCosts, {
      mocks,
    })

    expect(screen.getByText('Phase 4: Cutting the costs')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/vue'
import CardSolutionGoDee from '@/components/Cases/godee/cards/CardSolutionGoDee.vue'

describe('CardSolutionGoDee component', () => {
  it('should render correctly', () => {
    const { container } = render(CardSolutionGoDee)

    expect(screen.getByText(/Solution: GoDee/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

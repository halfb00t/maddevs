import { render, screen } from '@testing-library/vue'
import CardNationwideNumbers from '@/components/Cases/nambafood/cards/CardNationwideNumbers.vue'

describe('CardNationwideNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(CardNationwideNumbers)

    expect(screen.getByText(/700 entrepreneurs/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

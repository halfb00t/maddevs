import { render, screen } from '@testing-library/vue'
import CardDeliveryServiceNambafood from '@/components/Cases/nambafood/cards/CardDeliveryServiceNambafood.vue'

describe('CardDeliveryServiceNambafood component', () => {
  it('should render correctly', () => {
    const { container } = render(CardDeliveryServiceNambafood, {
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(screen.getByText(/Yearly increase in orders:/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

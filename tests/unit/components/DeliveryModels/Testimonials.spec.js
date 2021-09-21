import { render } from '@testing-library/vue'
import Testimonials from '@/components/DeliveryModels/Testimonials'

describe('Testimonials component', () => {
  it('should render correctly', () => {
    const { container } = render(Testimonials, {
      stubs: ['TestimonialBlock'],
    })

    expect(container).toMatchSnapshot()
  })
})

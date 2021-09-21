import { render } from '@testing-library/vue'
import TestimonialBlock from '@/components/DeliveryModels/shared/TestimonialBlock'

const props = {
  text: 'Testimonial text',
  author: {
    image: 'ruslan',
    name: 'Ruslan',
    position: 'CTO',
  },
}
const directives = {
  'lazy-load': () => {},
}

describe('TestimonialBlock component', () => {
  it('should render correctly', () => {
    const { container } = render(TestimonialBlock, {
      props,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})

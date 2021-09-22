import { fireEvent, render, screen } from '@testing-library/vue'
import CustomerTestimonials from '@/components/About/CustomerTestimonials'

const directives = {
  'lazy-load': () => {},
}

describe('CustomerTestimonials', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerTestimonials, {
      stubs: ['ClientOnly'],
      directives,
    })

    expect(screen.getByText('Customer Testimonials')).not.toBeNull()
    expect(screen.getByText('Daniel Vartanov,')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('widget show in DOM when page load', () => {
    const { container } = render(CustomerTestimonials, {
      stubs: ['ClientOnly'],
      directives,
    })

    const widget = container.getElementsByClassName('.clutch-widget')
    expect(widget).toBeTruthy()
  })
  it('correctly length of elements in DOM', () => {
    const { container } = render(CustomerTestimonials, {
      stubs: ['ClientOnly'],
      directives,
    })

    const contentItems = container.querySelectorAll('.customer-testimonials__testimonials-item')
    expect(contentItems).toHaveLength(3)
  })

  it('correctly call script after mounting', async () => {
    const { getAllByTestId } = render(CustomerTestimonials, {
      stubs: ['ClientOnly'],
      directives,
    })

    await fireEvent.scroll(global, { target: { scrollY: 100 } })
    expect(getAllByTestId('test-clutch-script')).toHaveLength(4)
  })

  describe('data-aos animation attribute', () => {
    it('should be \'fade-up\' value', () => {
      render(CustomerTestimonials, {
        directives,
        props: {
          aos: 'fade-up',
        },
        stubs: ['ClientOnly'],
      })

      expect(screen.getByTestId('customer-testimonial-container').getAttribute('data-aos')).toBe('fade-up')
    })

    it('should be null value', () => {
      render(CustomerTestimonials, {
        directives,
        stubs: ['ClientOnly'],
      })

      expect(screen.getByTestId('customer-testimonial-container').getAttribute('data-aos')).toBeNull()
    })
  })
})

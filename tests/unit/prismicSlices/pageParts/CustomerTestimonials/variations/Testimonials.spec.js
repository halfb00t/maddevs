import { render, screen } from '@testing-library/vue'
import Testimonials from '@/prismicSlices/pageParts/CustomerTestimonials/variations/Testimonials'

const directives = {
  'lazy-load': () => { },
}

describe('CustomerTestimonials slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(Testimonials, {
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it('should be \'fade-up\' value', () => {
      render(Testimonials, {
        directives,
        props: {
          animation: 'fade-up',
        },
      })

      expect(screen.getByTestId('testimonials-container').getAttribute('data-aos')).toBe('fade-up')
    })

    it('should be null value', () => {
      render(Testimonials, {
        directives,
      })

      expect(screen.getByTestId('testimonials-container').getAttribute('data-aos')).toBeNull()
    })
  })
})

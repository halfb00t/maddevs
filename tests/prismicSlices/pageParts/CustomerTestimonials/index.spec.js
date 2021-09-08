import { render, screen } from '@testing-library/vue'
import CustomerTestimonialsSlice from '@/prismicSlices/pageParts/CustomerTestimonials'

const defaultTitle = 'Customer testimonials title'

const directives = {
  'lazy-load': () => {},
}

const apiData = {
  title: defaultTitle,
  animation: 'fade-up',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('CustomerTestimonials slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(CustomerTestimonialsSlice, {
      directives,
      props: getProps(apiData),
    })
    expect(screen.getByText(defaultTitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(CustomerTestimonialsSlice, {
      directives,
      props: getProps({}),
    })
    expect(screen.getByText(defaultTitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

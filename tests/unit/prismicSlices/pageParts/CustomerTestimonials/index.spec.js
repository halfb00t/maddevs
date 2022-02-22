import { render, screen } from '@testing-library/vue'
import CustomerTestimonials from '@/prismicSlices/pageParts/CustomerTestimonials'

const stubs = ['CustomerTestimonialsSlice', 'Testimonials', 'LazyHydrate']

const apiData = {
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
  it('should render correctly with CustomerTestimonialsSlice component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(CustomerTestimonials, {
      stubs,
      props,
    })

    expect(screen.queryByTestId('first-variation')).not.toBeNull()
    expect(screen.queryByTestId('second-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with Testimonials component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'testimonialsSecondVariation'
    const { container } = render(CustomerTestimonials, {
      stubs,
      props,
    })

    expect(screen.queryByTestId('first-variation')).toBeNull()
    expect(screen.queryByTestId('second-variation')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

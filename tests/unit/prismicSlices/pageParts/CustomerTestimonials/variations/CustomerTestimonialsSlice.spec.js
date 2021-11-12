import { render } from '@testing-library/vue'
import CustomerTestimonialsSlice from '@/prismicSlices/pageParts/CustomerTestimonials/variations/CustomerTestimonialsSlice'

const apiData = {
  title: 'Customer testimonials title',
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
      stubs: ['CustomerTestimonials'],
      props: getProps(apiData),
    })

    expect(container).toMatchSnapshot()
  })
})

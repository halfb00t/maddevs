import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
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

  describe('Dynamic imports CustomerTestimonials', () => {
    it('should correctly import components', async () => {
      const props = getProps(apiData)
      props.slice.variation = 'default-slice'
      const container = shallowMount(CustomerTestimonials, { propsData: props })

      const CustomerTestimonialsSlice = await container.vm.$options.components.CustomerTestimonialsSlice.call()
      const Testimonials = await container.vm.$options.components.Testimonials.call()

      expect(CustomerTestimonialsSlice.default.name).toBe('CustomerTestimonialsSlice')
      expect(Testimonials.default.name).toBe('Testimonials')
    })
  })
})

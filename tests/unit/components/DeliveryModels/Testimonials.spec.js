import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Testimonials from '@/components/DeliveryModels/Testimonials'

describe('Testimonials component', () => {
  it('should render correctly', () => {
    const { container } = render(Testimonials, {
      stubs: ['TestimonialBlock', 'LazyHydrate'],
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports ModelsGrid component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Testimonials, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
      })

      const TestimonialBlock = await container.vm.$options.components.TestimonialBlock.call()

      expect(TestimonialBlock.default.name).toBe('TestimonialBlock')
    })
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Testimonials from '@/components/DeliveryModels/Testimonials'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Testimonials component', () => {
  it('should render correctly', () => {
    const { container } = render(Testimonials, {
      stubs: ['TestimonialBlock', 'LazyHydrate'],
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports ModelsGrid component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Testimonials, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        localVue,
      })

      const TestimonialBlock = await container.vm.$options.components.TestimonialBlock.call()

      expect(TestimonialBlock.default.name).toBe('TestimonialBlock')
    })
  })
})

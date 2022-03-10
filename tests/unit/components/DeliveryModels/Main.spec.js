import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/DeliveryModels/Main'

const stubs = ['Banner', 'ModelsGrid', 'Presentation', 'Testimonials', 'CTABanner', 'LazyHydrate', 'NuxtLink']
const directives = {
  'v-lazy-load': () => {},
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports DeliveryModels component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      const Banner = await container.vm.$options.components.Banner.call()
      const ModelsGrid = await container.vm.$options.components.ModelsGrid.call()
      const Presentation = await container.vm.$options.components.Presentation.call()
      const Testimonials = await container.vm.$options.components.Testimonials.call()
      const CTABanner = await container.vm.$options.components.CTABanner.call()

      expect(Banner.default.name).toBe('Banner')
      expect(ModelsGrid.default.name).toBe('ModelsGrid')
      expect(Presentation.default.name).toBe('Presentation')
      expect(Testimonials.default.name).toBe('Testimonials')
      expect(CTABanner.default.name).toBe('CTABanner')
    })
  })
})

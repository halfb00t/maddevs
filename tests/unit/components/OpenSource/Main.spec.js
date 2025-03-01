import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/OpenSource/Main'

const stubs = ['Banner', 'ParagraphSection', 'FeaturedProjects', 'Boilerplates', 'CTABanner']

jest.mock('~/helpers/generatorUid')

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        stubs: ['LazyHydrate'],
        mocks,
      })

      const Banner = await container.vm.$options.components.Banner.call()
      const ParagraphSection = await container.vm.$options.components.ParagraphSection.call()
      const FeaturedProjects = await container.vm.$options.components.FeaturedProjects.call()
      const Boilerplates = await container.vm.$options.components.Boilerplates.call()
      const CTABanner = await container.vm.$options.components.CTABanner.call()

      expect(Banner.default.name).toBe('Banner')
      expect(ParagraphSection.default.name).toBe('ParagraphSection')
      expect(FeaturedProjects.default.name).toBe('FeaturedProjects')
      expect(Boilerplates.default.name).toBe('Boilerplates')
      expect(CTABanner.default.name).toBe('CTABanner')
    })
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/peklo/Main'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const directives = {
  'mad-parallax': jest.fn(),
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const stubs = ['About',
  'BenefitsFromPekloTool',
  'HowPekloToolWorks',
  'KeywordGrouping',
  'ClusterisationAlgorithm',
  'PekloToolUnderTheHood',
  'Technologies',
  'Team',
  'LazyHydrate',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
  describe('Dynamic imports Peklo component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
        localVue,
      })
      const About = await container.vm.$options.components.About.call()
      const BenefitsFromPekloTool = await container.vm.$options.components.BenefitsFromPekloTool.call()
      const HowPekloToolWorks = await container.vm.$options.components.HowPekloToolWorks.call()
      const KeywordGrouping = await container.vm.$options.components.KeywordGrouping.call()
      const ClusterisationAlgorithm = await container.vm.$options.components.ClusterisationAlgorithm.call()
      const PekloToolUnderTheHood = await container.vm.$options.components.PekloToolUnderTheHood.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const Team = await container.vm.$options.components.Team.call()

      expect(About.default.name).toBe('About')
      expect(BenefitsFromPekloTool.default.name).toBe('BenefitsFromPekloTool')
      expect(HowPekloToolWorks.default.name).toBe('HowPekloToolWorks')
      expect(KeywordGrouping.default.name).toBe('KeywordGrouping')
      expect(ClusterisationAlgorithm.default.name).toBe('ClusterisationAlgorithm')
      expect(PekloToolUnderTheHood.default.name).toBe('PekloToolUnderTheHood')
      expect(Technologies.default.name).toBe('Technologies')
      expect(Team.default.name).toBe('MeetTheTeam')
    })
  })
})

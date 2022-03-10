import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/peklo/Main'

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

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

import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/veeqo/Main'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = [
  'PhaseCuttingTheCosts',
  'HighLevelOverview',
  'ContinuousIntegrationResult',
  'ContinuousIntegrationResult',
  'PhasInfrastructureAsCodeResult',
  'InventoryChangeLog',
  'PhaseElasticsearchResult',
  'TextQuote',
  'CardTechSolution',
  'Picture',
  'PhaseFixingDatabaseOutages',
  'ListTechnologiesItem',
  'LazyHydrate',
]

const directives = {
  'lazy-load': () => {
  },
  'mad-parallax': () => {
  },
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
  describe('Dynamic imports Veeqo component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks,
        directives,
      })

      const About = await container.vm.$options.components.About.call()
      const HighLevelOverview = await container.vm.$options.components.HighLevelOverview.call()
      const ChallengesAndSolutions = await container.vm.$options.components.ChallengesAndSolutions.call()
      const PhaseFixingDatabaseOutages = await container.vm.$options.components.PhaseFixingDatabaseOutages.call()
      const PhaseContinuousIntegration = await container.vm.$options.components.PhaseContinuousIntegration.call()
      const ContinuousIntegrationResult = await container.vm.$options.components.ContinuousIntegrationResult.call()
      const PhaseElasticsearchResult = await container.vm.$options.components.PhaseElasticsearchResult.call()
      const PhaseCuttingTheCosts = await container.vm.$options.components.PhaseCuttingTheCosts.call()
      const PhasInfrastructureAsCode = await container.vm.$options.components.PhasInfrastructureAsCode.call()
      const PhasInfrastructureAsCodeResult = await container.vm.$options.components.PhasInfrastructureAsCodeResult.call()
      const Team = await container.vm.$options.components.Team.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const PhaseMovingToKubernetes = await container.vm.$options.components.PhaseMovingToKubernetes.call()
      const InventoryChangeLog = await container.vm.$options.components.InventoryChangeLog.call()

      expect(About.default.name).toBe('About')
      expect(HighLevelOverview.default.name).toBe('HighLevelOverview')
      expect(ChallengesAndSolutions.default.name).toBe('ChallengesAndSolutions')
      expect(PhaseFixingDatabaseOutages.default.name).toBe('PhaseFixingDatabaseOutages')
      expect(PhaseContinuousIntegration.default.name).toBe('PhaseContinuousIntegration')
      expect(ContinuousIntegrationResult.default.name).toBe('ContinuousIntegrationResult')
      expect(PhaseElasticsearchResult.default.name).toBe('PhaseElasticsearchResult')
      expect(PhaseCuttingTheCosts.default.name).toBe('PhaseCuttingTheCosts')
      expect(PhasInfrastructureAsCode.default.name).toBe('PhasInfrastructureAsCode')
      expect(PhasInfrastructureAsCodeResult.default.name).toBe('PhasInfrastructureAsCodeResult')
      expect(Team.default.name).toBe('Team')
      expect(Technologies.default.name).toBe('Technologies')
      expect(PhaseMovingToKubernetes.default.name).toBe('PhaseMovingToKubernetes')
      expect(InventoryChangeLog.default.name).toBe('InventoryChangeLog')
    })
  })
})

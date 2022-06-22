import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/godee/Main.vue'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

const mocks = {
  $getMediaFromS3: img => img,
}

const stubs = [
  'ClientOnly',
  'NuxtLink',
  'Footer',
  'DevelopmentGoals',
  'ParallaxImage',
  'CaseHeader',
  'Picture',
  'TextQuote',
  'IntellegentManagementPanel',
  'ListTechnologiesItem',
  'CardGoDeeFeature',
  'TripsMonitor',
  'RouteOptimisation',
]

const directives = {
  'mad-parallax': () => {},
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
      stubs,
      container: document.body.appendChild(containerToRender),
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports GoDee component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
        localVue,
      })

      const About = await container.vm.$options.components.About.call()
      const IssuesAndSolution = await container.vm.$options.components.IssuesAndSolution.call()
      const ParallaxImage = await container.vm.$options.components.ParallaxImage.call()
      const IssuesAndSolutionCards = await container.vm.$options.components.IssuesAndSolutionCards.call()
      const Collaboration = await container.vm.$options.components.Collaboration.call()
      const Mvp = await container.vm.$options.components.Mvp.call()
      const BeforeAfter = await container.vm.$options.components.BeforeAfter.call()
      const DevelopmentGoals = await container.vm.$options.components.DevelopmentGoals.call()
      const PreviewCards = await container.vm.$options.components.PreviewCards.call()
      const IntellegentManagementPanel = await container.vm.$options.components.IntellegentManagementPanel.call()
      const TripsMonitor = await container.vm.$options.components.TripsMonitor.call()
      const RouteOptimisation = await container.vm.$options.components.RouteOptimisation.call()
      const RealTimeETA = await container.vm.$options.components.RealTimeETA.call()
      const InfrastructureScheme = await container.vm.$options.components.InfrastructureScheme.call()
      const TechnologyStack = await container.vm.$options.components.TechnologyStack.call()
      const Monitoring = await container.vm.$options.components.Monitoring.call()
      const StableScalableSolution = await container.vm.$options.components.StableScalableSolution.call()
      const Team = await container.vm.$options.components.Team.call()
      const CaseFooter = await container.vm.$options.components.CaseFooter.call()

      expect(About.default.name).toBe('About')
      expect(IssuesAndSolution.default.name).toBe('IssuesAndSolution')
      expect(ParallaxImage.default.name).toBe('ParallaxImage')
      expect(IssuesAndSolutionCards.default.name).toBe('IssuesAndSolutionCards')
      expect(Collaboration.default.name).toBe('Collaboration')
      expect(Mvp.default.name).toBe('Mvp')
      expect(BeforeAfter.default.name).toBe('BeforeAfter')
      expect(DevelopmentGoals.default.name).toBe('DevelopmentGoals')
      expect(PreviewCards.default.name).toBe('PreviewCards')
      expect(IntellegentManagementPanel.default.name).toBe('IntellegentManagementPanel')
      expect(TripsMonitor.default.name).toBe('TripsMonitor')
      expect(RouteOptimisation.default.name).toBe('RouteOptimisation')
      expect(RealTimeETA.default.name).toBe('RealTimeETA')
      expect(InfrastructureScheme.default.name).toBe('InfrastructureScheme')
      expect(TechnologyStack.default.name).toBe('TechnologyStack')
      expect(Monitoring.default.name).toBe('Monitoring')
      expect(StableScalableSolution.default.name).toBe('InfrastructureScheme')
      expect(Team.default.name).toBe('Team')
      expect(CaseFooter.default.name).toBe('Header')
    })
  })
})

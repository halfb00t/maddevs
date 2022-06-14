import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/guardrails/Main'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = [

  'LazyHydrate',
]

const directives = {
  'mad-parallax': jest.fn(),
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
      stubs,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
  describe('Dynamic imports Guardrails component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks,
        directives,
        localVue,
      })
      const About = await container.vm.$options.components.About.call()
      const StoryBehindProject = await container.vm.$options.components.StoryBehindProject.call()
      const ProjectIssues = await container.vm.$options.components.ProjectIssues.call()
      const Dashboard = await container.vm.$options.components.Dashboard.call()
      const ApiForDashboard = await container.vm.$options.components.ApiForDashboard.call()
      const CliandKubernetes = await container.vm.$options.components.CliandKubernetes.call()
      const TechnicalAgility = await container.vm.$options.components.TechnicalAgility.call()
      const AgilityIsKey = await container.vm.$options.components.AgilityIsKey.call()
      const ResultsAndAchievements = await container.vm.$options.components.ResultsAndAchievements.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const Team = await container.vm.$options.components.Team.call()

      expect(About.default.name).toBe('About')
      expect(StoryBehindProject.default.name).toBe('StoryBehindProject')
      expect(ProjectIssues.default.name).toBe('ProjectIssues')
      expect(Dashboard.default.name).toBe('Dashboard')
      expect(ApiForDashboard.default.name).toBe('ApiForDashboard')
      expect(CliandKubernetes.default.name).toBe('CliandKubernetes')
      expect(TechnicalAgility.default.name).toBe('TechnicalAgility')
      expect(AgilityIsKey.default.name).toBe('AgilityIsKey')
      expect(ResultsAndAchievements.default.name).toBe('ResultsAndAchievements')
      expect(Technologies.default.name).toBe('Technologies')
      expect(Team.default.name).toBe('Team')
    })
  })
})

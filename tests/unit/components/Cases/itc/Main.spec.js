import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/itc/Main'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['About', 'ProjectMission', 'Challenges', 'SavingTime', 'CollectingDataForAnalysis', 'DevelopingTheInnovation', 'Technologies', 'Team', 'FuturePlans', 'Partnership']

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports Yourcast component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        stubs: ['NuxtLink'],
        localVue,
      })

      const About = await container.vm.$options.components.About.call()
      const ProjectMission = await container.vm.$options.components.ProjectMission.call()
      const Team = await container.vm.$options.components.Team.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const Challenges = await container.vm.$options.components.Challenges.call()
      const SavingTime = await container.vm.$options.components.SavingTime.call()
      const CollectingDataForAnalysis = await container.vm.$options.components.CollectingDataForAnalysis.call()
      const DevelopingTheInnovation = await container.vm.$options.components.DevelopingTheInnovation.call()
      const FuturePlans = await container.vm.$options.components.FuturePlans.call()
      const Partnership = await container.vm.$options.components.Partnership.call()

      expect(About.default.name).toBe('About')
      expect(ProjectMission.default.name).toBe('ProjectMission')
      expect(Team.default.name).toBe('MeetTheTeam')
      expect(Technologies.default.name).toBe('Technologies')
      expect(Challenges.default.name).toBe('Challenges')
      expect(SavingTime.default.name).toBe('SavingTime')
      expect(CollectingDataForAnalysis.default.name).toBe('CollectingDataForAnalysis')
      expect(DevelopingTheInnovation.default.name).toBe('DevelopingTheInnovation')
      expect(FuturePlans.default.name).toBe('FuturePlans')
      expect(Partnership.default.name).toBe('Partnership')
    })
  })
})

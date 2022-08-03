import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '../../../../../client/components/Cases/lido/Main'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = [
  'About',
  'LidoStatisticsWithTimeline',
  'TheStoryBehindTheProject',
  'ProjectGoals',
  'FirstChallenge',
  'VisualFlow',
  'SecondChallenge',
  'ImportantInsight',
  'ProjectPlanning',
  'Results',
  'TechnologiesStack',
  'MeetTheTeam',
  'Terminology',
  'LazyHydrate',
]

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports Lido component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
        localVue,
      })

      const About = await container.vm.$options.components.About.call()
      const LidoStatisticsWithTimeline = await container.vm.$options.components.LidoStatisticsWithTimeline.call()
      const TheStoryBehindTheProject = await container.vm.$options.components.TheStoryBehindTheProject.call()
      const ProjectGoals = await container.vm.$options.components.ProjectGoals.call()
      const FirstChallenge = await container.vm.$options.components.FirstChallenge.call()
      const VisualFlow = await container.vm.$options.components.VisualFlow.call()
      const SecondChallenge = await container.vm.$options.components.SecondChallenge.call()
      const ImportantInsight = await container.vm.$options.components.ImportantInsight.call()
      const ProjectPlanning = await container.vm.$options.components.ProjectPlanning.call()
      const Results = await container.vm.$options.components.Results.call()
      const TechnologiesStack = await container.vm.$options.components.TechnologiesStack.call()
      const MeetTheTeam = await container.vm.$options.components.MeetTheTeam.call()
      const Terminology = await container.vm.$options.components.Terminology.call()

      expect(About.default.name).toBe('About')
      expect(LidoStatisticsWithTimeline.default.name).toBe('LidoStatisticsWithTimeline')
      expect(TheStoryBehindTheProject.default.name).toBe('TheStoryBehindTheProject')
      expect(ProjectGoals.default.name).toBe('ProjectGoals')
      expect(FirstChallenge.default.name).toBe('FirstChallenge')
      expect(VisualFlow.default.name).toBe('VisualFlow')
      expect(SecondChallenge.default.name).toBe('SecondChallenge')
      expect(ImportantInsight.default.name).toBe('ImportantInsight')
      expect(ProjectPlanning.default.name).toBe('ProjectPlanning')
      expect(Results.default.name).toBe('Results')
      expect(TechnologiesStack.default.name).toBe('TechnologiesStack')
      expect(MeetTheTeam.default.name).toBe('MeetTheTeam')
      expect(Terminology.default.name).toBe('Terminology')
    })
  })
})

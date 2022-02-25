import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/yourcast/Main'
import '../../../__mocks__/intersectionObserverMock'

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

const stubs = [
  'NuxtLink',
  'TextQuote',
  'Picture',
  'ListTechnologiesItem',
  'PhaseLiveStreamingTechnology',
  'LazyHydrate',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports Yourcast component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      const AboutYourcast = await container.vm.$options.components.AboutYourcast.call()
      const ProjectInNumbers = await container.vm.$options.components.ProjectInNumbers.call()
      const SupportedGadgets = await container.vm.$options.components.SupportedGadgets.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const KeyProjectMilestones = await container.vm.$options.components.KeyProjectMilestones.call()
      const PhaseOnlineCinema = await container.vm.$options.components.PhaseOnlineCinema.call()
      const PhaseLiveStreamingTechnology = await container.vm.$options.components.PhaseLiveStreamingTechnology.call()
      const PhaseRedesignAndOptimisations = await container.vm.$options.components.PhaseRedesignAndOptimisations.call()
      const PhaseVideoOnDemand = await container.vm.$options.components.PhaseVideoOnDemand.call()
      const PhaseUserAuthorisation = await container.vm.$options.components.PhaseUserAuthorisation.call()
      const WatchWhatYouLikeVideo = await container.vm.$options.components.WatchWhatYouLikeVideo.call()
      const PlansForSimilarProjects = await container.vm.$options.components.PlansForSimilarProjects.call()
      const Team = await container.vm.$options.components.Team.call()

      expect(AboutYourcast.default.name).toBe('AboutYourcast')
      expect(ProjectInNumbers.default.name).toBe('ProjectInNumbers')
      expect(SupportedGadgets.default.name).toBe('SupportedGadgets')
      expect(Technologies.default.name).toBe('TechnologyStack')
      expect(KeyProjectMilestones.default.name).toBe('KeyProjectMilestones')
      expect(PhaseOnlineCinema.default.name).toBe('PhaseOnlineCinema')
      expect(PhaseLiveStreamingTechnology.default.name).toBe('PhaseLiveStreamingTechnology')
      expect(PhaseRedesignAndOptimisations.default.name).toBe('PhaseRedesignAndOptimisations')
      expect(PhaseVideoOnDemand.default.name).toBe('PhaseVideoOnDemand')
      expect(PhaseUserAuthorisation.default.name).toBe('PhaseUserAuthorisation')
      expect(WatchWhatYouLikeVideo.default.name).toBe('WatchWhatYouLikeVideo')
      expect(PlansForSimilarProjects.default.name).toBe('PlansForSimilarProjects')
      expect(Team.default.name).toBe('MeetTheTeam')
    })
  })
})

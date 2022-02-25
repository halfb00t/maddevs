import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/sjmc/Main'

const directives = {
  'lazy-load': () => {},
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs: [
        'NuxtLink',
        'TextQuote',
        'Picture',
        'ListTechnologiesItem',
        'PhaseLiveStreamingTechnology',
        'LazyHydrate',
      ],
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  describe('Dymanic imports Main', () => {
    it('should', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      const About = await container.vm.$options.components.About.call()
      const Partnership = await container.vm.$options.components.Partnership.call()
      const TheChallenges = await container.vm.$options.components.TheChallenges.call()
      const Software = await container.vm.$options.components.Software.call()
      const MobileApplications = await container.vm.$options.components.MobileApplications.call()
      const Hardware = await container.vm.$options.components.Hardware.call()
      const KeyGoals = await container.vm.$options.components.KeyGoals.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const Office = await container.vm.$options.components.Office.call()
      const TeamIssues = await container.vm.$options.components.TeamIssues.call()
      const SystemMonitoring = await container.vm.$options.components.SystemMonitoring.call()
      const AutomatedTesting = await container.vm.$options.components.AutomatedTesting.call()
      const Trip = await container.vm.$options.components.Trip.call()
      const OngoingPartnership = await container.vm.$options.components.OngoingPartnership.call()

      expect(About.default.name).toBe('About')
      expect(Partnership.default.name).toBe('Partnership')
      expect(TheChallenges.default.name).toBe('TheChallenges')
      expect(Software.default.name).toBe('Software')
      expect(MobileApplications.default.name).toBe('MobileApplications')
      expect(Hardware.default.name).toBe('Hardware')
      expect(KeyGoals.default.name).toBe('KeyGoals')
      expect(Technologies.default.name).toBe('Technologies')
      expect(Office.default.name).toBe('Office')
      expect(TeamIssues.default.name).toBe('TeamIssues')
      expect(SystemMonitoring.default.name).toBe('SystemMonitoring')
      expect(AutomatedTesting.default.name).toBe('AutomatedTesting')
      expect(Trip.default.name).toBe('Trip')
      expect(OngoingPartnership.default.name).toBe('OngoingPartnership')
    })
  })
})

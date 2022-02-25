import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/citycam/Main'

const directives = {
  'lazy-load': () => {},
}

const stubs = [
  'About',
  'WhyCityCam',
  'ChallengesAndSolutions',
  'Prototype',
  'PowerSupply',
  'DevicePerfecting',
  'OngoingProgress',
  'Technologies',
  'Team',
  'LazyHydrate',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports Citycam component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      const About = await container.vm.$options.components.About.call()
      const WhyCityCam = await container.vm.$options.components.WhyCityCam.call()
      const ChallengesAndSolutions = await container.vm.$options.components.ChallengesAndSolutions.call()
      const Prototype = await container.vm.$options.components.Prototype.call()
      const PowerSupply = await container.vm.$options.components.PowerSupply.call()
      const DevicePerfecting = await container.vm.$options.components.DevicePerfecting.call()
      const OngoingProgress = await container.vm.$options.components.OngoingProgress.call()
      const Technologies = await container.vm.$options.components.Technologies.call()
      const Team = await container.vm.$options.components.Team.call()

      expect(About.default.name).toBe('About')
      expect(WhyCityCam.default.name).toBe('WhyCityCam')
      expect(ChallengesAndSolutions.default.name).toBe('ChallengesAndSolutions')
      expect(Prototype.default.name).toBe('Prototype')
      expect(PowerSupply.default.name).toBe('PowerSupply')
      expect(DevicePerfecting.default.name).toBe('DevicePerfecting')
      expect(OngoingProgress.default.name).toBe('OngoingProgress')
      expect(Technologies.default.name).toBe('Technologies')
      expect(Team.default.name).toBe('Team')
    })
  })
})

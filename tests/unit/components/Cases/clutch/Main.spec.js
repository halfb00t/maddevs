import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/clutch/Main'
import '../../../__mocks__/intersectionObserverMock'

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
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
        'LazyHydrate',
        'About',
        'WhyClutch',
        'TechChallenges',
        'OutStuffing',
        'Microservices',
        'DataAndPasswords',
        'WidgetSpeed',
        'DataProcessed',
        'DevOps',
        'Workflow',
        'Pipelines',
        'Standup',
        'TechStack',
        'Review',
      ],
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports Clutch component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      const About = await container.vm.$options.components.About.call()
      const WhyClutch = await container.vm.$options.components.WhyClutch.call()
      const TechChallenges = await container.vm.$options.components.TechChallenges.call()
      const OutStuffing = await container.vm.$options.components.OutStuffing.call()
      const Microservices = await container.vm.$options.components.Microservices.call()
      const DataAndPasswords = await container.vm.$options.components.DataAndPasswords.call()
      const DevOps = await container.vm.$options.components.DevOps.call()
      const Workflow = await container.vm.$options.components.Workflow.call()
      const Pipelines = await container.vm.$options.components.Pipelines.call()
      const Standup = await container.vm.$options.components.Standup.call()
      const TechStack = await container.vm.$options.components.TechStack.call()
      const Review = await container.vm.$options.components.Review.call()
      const WidgetSpeed = await container.vm.$options.components.WidgetSpeed.call()
      const DataProcessed = await container.vm.$options.components.DataProcessed.call()

      expect(About.default.name).toBe('About')
      expect(WhyClutch.default.name).toBe('WhyClutch')
      expect(TechChallenges.default.name).toBe('TechChallenges')
      expect(OutStuffing.default.name).toBe('OutStuffing')
      expect(Microservices.default.name).toBe('Microservices')
      expect(DataAndPasswords.default.name).toBe('DataAndPasswords')
      expect(DevOps.default.name).toBe('DevOps')
      expect(Workflow.default.name).toBe('Workflow')
      expect(Pipelines.default.name).toBe('Pipelines')
      expect(Standup.default.name).toBe('Standup')
      expect(TechStack.default.name).toBe('TechStack')
      expect(Review.default.name).toBe('Review')
      expect(WidgetSpeed.default.name).toBe('WidgetSpeed')
      expect(DataProcessed.default.name).toBe('DataProcessed')
    })
  })
})

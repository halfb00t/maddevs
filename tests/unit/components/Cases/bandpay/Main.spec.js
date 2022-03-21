import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/bandpay/Main'
import '../../../__mocks__/intersectionObserverMock'

const stubs = [
  'About',
  'OpportunitiesCards',
  'BenefitMostBandPay',
  'ChallengesSolutions',
  'LookingAtTheFrontend',
  'IntegratingOnline',
  'TwoSmartphones',
  'WhatIsBackend',
  'BandPayAppArchitecture',
  'ImplementingPipelines',
  'BuyerRegistration',
  'ProjectDevelopment',
  'ProjectPlanning',
  'KeyAchievements',
  'TechnologiesStack',
  'MeetTeam',
  'LazyHydrate',
]

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

describe('BandPay Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports BandPay component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      const About = await container.vm.$options.components.About.call()
      const OpportunitiesCards = await container.vm.$options.components.OpportunitiesCards.call()
      const BenefitMostBandPay = await container.vm.$options.components.BenefitMostBandPay.call()
      const ChallengesSolutions = await container.vm.$options.components.ChallengesSolutions.call()
      const LookingAtTheFrontend = await container.vm.$options.components.LookingAtTheFrontend.call()
      const IntegratingOnline = await container.vm.$options.components.IntegratingOnline.call()
      const TwoSmartphones = await container.vm.$options.components.TwoSmartphones.call()
      const WhatIsBackend = await container.vm.$options.components.WhatIsBackend.call()
      const BandPayAppArchitecture = await container.vm.$options.components.BandPayAppArchitecture.call()
      const ImplementingPipelines = await container.vm.$options.components.ImplementingPipelines.call()
      const BuyerRegistration = await container.vm.$options.components.BuyerRegistration.call()
      const ProjectDevelopment = await container.vm.$options.components.ProjectDevelopment.call()
      const ProjectPlanning = await container.vm.$options.components.ProjectPlanning.call()
      const KeyAchievements = await container.vm.$options.components.KeyAchievements.call()
      const TechnologiesStack = await container.vm.$options.components.TechnologiesStack.call()
      const MeetTeam = await container.vm.$options.components.MeetTeam.call()

      expect(About.default.name).toBe('About')
      expect(OpportunitiesCards.default.name).toBe('OpportunitiesCards')
      expect(BenefitMostBandPay.default.name).toBe('BenefitMostBandPay')
      expect(ChallengesSolutions.default.name).toBe('ChallengesSolutions')
      expect(LookingAtTheFrontend.default.name).toBe('LookingAtTheFrontend')
      expect(IntegratingOnline.default.name).toBe('IntegratingOnline')
      expect(TwoSmartphones.default.name).toBe('TwoSmartphones')
      expect(WhatIsBackend.default.name).toBe('WhatIsBackend')
      expect(BandPayAppArchitecture.default.name).toBe('BandPayAppArchitecture')
      expect(ImplementingPipelines.default.name).toBe('ImplementingPipelines')
      expect(BuyerRegistration.default.name).toBe('BuyerRegistration')
      expect(ProjectDevelopment.default.name).toBe('ProjectDevelopment')
      expect(ProjectPlanning.default.name).toBe('ProjectPlanning')
      expect(KeyAchievements.default.name).toBe('KeyAchievements')
      expect(TechnologiesStack.default.name).toBe('TechnologiesStack')
      expect(MeetTeam.default.name).toBe('MeetTeam')
    })
  })
})

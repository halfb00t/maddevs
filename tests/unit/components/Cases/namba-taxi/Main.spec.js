import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/nambataxi/Main'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['About', 'TeamNambaTaxi', 'TechStackNamba', 'MobileApplications', 'FaultTolerance', 'Requirements', 'Benefits', 'LazyHydrate']

const directives = {
  'mad-parallax': jest.fn(),
}

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

  describe('Dynamic imports Namba Taxi component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
        localVue,
      })

      const About = await container.vm.$options.components.About.call()
      const Benefits = await container.vm.$options.components.Benefits.call()
      const Requirements = await container.vm.$options.components.Requirements.call()
      const FaultTolerance = await container.vm.$options.components.FaultTolerance.call()
      const MobileApplications = await container.vm.$options.components.MobileApplications.call()
      const TechStackNamba = await container.vm.$options.components.TechStackNamba.call()
      const TeamNambaTaxi = await container.vm.$options.components.TeamNambaTaxi.call()

      expect(About.default.name).toBe('About')
      expect(Benefits.default.name).toBe('Benefits')
      expect(Requirements.default.name).toBe('Requirements')
      expect(FaultTolerance.default.name).toBe('FaultTolerance')
      expect(MobileApplications.default.name).toBe('MobileApplications')
      expect(TechStackNamba.default.name).toBe('TechStackNamba')
      expect(TeamNambaTaxi.default.name).toBe('TeamNambaTaxi')
    })
  })
})

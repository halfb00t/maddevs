import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Main from '@/components/Careers/Main'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['NuxtLink', 'LazyHydrate', 'Banner', 'ProjectsCountries', 'Benefits', 'KeyMetrics', 'EmployeesBenefits', 'OpenPositions', 'CTABanner', 'ScrollToPositionsLink']

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const actions = {
  getCareersHome: jest.fn(),
}

const store = new Vuex.Store({
  actions,
  getters: {
    vacancyCategories: jest.fn(),
  },
})

jest.mock('~/helpers/generatorUid')

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports Careers component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(Main, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
          $t: () => 'translated',
        },
        store,
        localVue,
        stubs: ['NuxtLink'],
      })

      const ProjectsCountries = await container.vm.$options.components.ProjectsCountries.call()
      const Benefits = await container.vm.$options.components.Benefits.call()
      const KeyMetrics = await container.vm.$options.components.KeyMetrics.call()
      const EmployeesBenefits = await container.vm.$options.components.EmployeesBenefits.call()
      const OpenPositions = await container.vm.$options.components.OpenPositions.call()
      const CTABanner = await container.vm.$options.components.CTABanner.call()

      expect(ProjectsCountries.default.name).toBe('ProjectsCountries')
      expect(Benefits.default.name).toBe('Benefits')
      expect(KeyMetrics.default.name).toBe('KeyMetrics')
      expect(EmployeesBenefits.default.name).toBe('EmployeesBenefits')
      expect(OpenPositions.default.name).toBe('OpenPositions')
      expect(CTABanner.default.name).toBe('CTABanner')
    })
  })
})

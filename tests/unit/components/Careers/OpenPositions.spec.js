import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import OpenPositions from '@/components/Careers/OpenPositions'

const stubs = ['LazyHydrate', 'PositionsFilter', 'PositionsGrid']

const mocks = {
  $t: () => 'translated',
}

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    changeVacanciesCategory: () => jest.fn(),
  },
  getters: {
    vacancyCategories: () => ([{ title: 'test' }]),
    vacanciesCategory: jest.fn(),
  },
})

describe('OpenPositions component', () => {
  it('should render correctly', () => {
    const { container } = render(OpenPositions, {
      stubs,
      mocks,
      store,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports EmployeesBenefits component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(OpenPositions, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
          $t: () => 'translated',
        },
        store,
        localVue,
      })

      const PositionsFilter = await container.vm.$options.components.PositionsFilter.call()

      expect(PositionsFilter.default.name).toBe('PositionsFilter')
    })
  })
})

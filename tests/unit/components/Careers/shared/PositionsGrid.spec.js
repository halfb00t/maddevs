import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import PositionsGrid from '@/components/Careers/shared/PositionsGrid'

const stubs = ['PositionsGridItem', 'UnderlinedButton']

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacancies: () => ([]),
    filteredVacancies: () => ([]),
    vacanciesCategory: () => ('Category'),
    vacanciesPage: () => 1,
  },
  actions: {
    getMoreVacancies: jest.fn(),
  },
}

describe('PositionsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionsGrid, {
      stubs,
      store,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly import dynamic component', async () => {
    store.getters.vacanciesCategory = null
    const wrapper = shallowMount(PositionsGrid, {
      stubs: ['UnderlinedButton'],
      store,
      localVue,
    })

    const PositionsGridItem = await wrapper.vm.$options.components.PositionsGridItem.call()
    expect(PositionsGridItem.default.name).toBe('PositionsGridItem')
  })
})

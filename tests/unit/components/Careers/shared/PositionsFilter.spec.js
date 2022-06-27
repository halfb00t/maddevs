import { fireEvent, render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import OpenPositions from '@/components/Careers/OpenPositions'
import PositionsFilter from '@/components/Careers/shared/PositionsFilter'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacanciesCategory: () => ('category1'),
    vacancyCategories: () => (['category1', 'category2']),
  },
  actions: {
    changeVacanciesCategory: jest.fn(),
  },
}

describe('PositionsFilter component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionsFilter, {
      parentComponent: OpenPositions,
      store,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work filter', async () => {
    render(PositionsFilter, {
      parentComponent: OpenPositions,
      store,
      localVue,
    })

    const input = screen.getAllByTestId('vacancy-input-id')
    await fireEvent.click(input[0], 'Python')
    expect(store.actions.changeVacanciesCategory).toHaveBeenCalledTimes(1)
  })
})

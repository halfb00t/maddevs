import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ScrollToPositionsLink from '@/components/Careers/shared/ScrollToPositionsLink'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacancies: () => ([]),
    vacanciesLoaded: () => true,
  },
}

const mocks = {
  $t: () => 'translated',
  $route: {
    path: '/about/careers',
  },
}

const stubs = ['NuxtLink']

describe('ScrollToPositionsLink component', () => {
  it('should render correctly', () => {
    const { container } = render(ScrollToPositionsLink, {
      stubs,
      store,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

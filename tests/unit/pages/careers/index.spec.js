import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '@/pages/careers/index'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  setHeaderTransparentArea: () => {},
  setHeaderTransparent: () => {},
}

const store = new Vuex.Store({
  actions,
})

const mocks = {
  $lazyLoad: {
    init: jest.fn(),
  },
  featureFlag: jest.fn(),
  $route: {
    path: jest.fn(),
  },
  $t: () => 'translated',
  $i18n: {
    locale: 'en',
  },
}

const stubs = ['Main']

describe('Index page', () => {
  it('should render correctly', () => {
    const { container } = render(Index, {
      localVue,
      mocks,
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})

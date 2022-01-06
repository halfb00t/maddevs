import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '@/pages/delivery-models/index'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  setHeaderTransparentArea: () => {},
  setHeaderTransparent: () => {},
}

const store = new Vuex.Store({
  actions,
})

const stubs = ['Main']

describe('Index page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(Index, {
      localVue,
      stubs,
      store,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import OpenSource from '@/pages/open-source'

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ['Main']

const actions = {
  setHeaderTransparentArea: () => {},
  setHeaderTransparent: () => {},
}

const store = new Vuex.Store({
  actions,
})

describe('OpenSource page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(OpenSource, {
      localVue,
      stubs,
      store,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
        featureFlag: jest.fn(),
      },
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'
import initializeLazyLoad from '@/helpers/lazyLoad'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = new Vuex.Store({
  modules: {
    blog: {
      state: {
        customerContent: {
          featured_cu: {
            uid: 'uid',
          },
        },
      },
      getters: {
        customerContent(state) {
          return state.customerContent
        },
      },
    },
    blogAuthors: {
      state: {
        authors: [],
      },
      getters: {
        allAuthors(state) {
          return state.authors
        },
      },
    },
  },
  getters: {
    featuredCUPost: () => ({
      body: [],
      post_author: {
        id: 'id',
      },
      featured_image: {
        url: '',
      },
    }),
  },
})

const stubs = ['PrismicImage', 'NuxtLink']

const directives = {
  'lazy-load': () => {},
}

jest.mock('@/helpers/lazyLoad', () => ({
  initializeLazyLoad: jest.fn(),
}))

describe('CustomerUniversitySection component', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerUniversitySection, {
      stubs,
      mocks,
      store,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work update hook', async () => {
    const initLazyLoadMock = jest.spyOn(initializeLazyLoad, 'initializeLazyLoad').mockImplementation(() => {})
    const nextTick = jest.fn(() => initLazyLoadMock())
    mocks.$nextTick = nextTick
    const wrapper = shallowMount(CustomerUniversitySection, {
      stubs,
      mocks,
      store,
      directives,
      localVue,
    })

    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick(() => {
      expect(initLazyLoadMock).toHaveBeenCalledTimes(1)
    })
  })
})

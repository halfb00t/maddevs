import 'regenerator-runtime'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let push = jest.fn()

const stubs = ['Header', 'Nuxt', 'Footer', 'ClientOnly', 'Chat']

jest.mock('~/helpers/generatorUid')

let mocks = {
  $nextTick: jest.fn(callback => {
    if (typeof callback === 'function') {
      callback()
    }
  }),
  $nuxt: {
    $on: jest.fn(),
    $route: {
      path: '/',
    },
  },
  $router: {
    push,
  },
}
const SCROLL_FN = jest.fn()

const store = {
  getters: {
    headerTransparentArea: () => '',
    headerTransparent: () => true,
    showFooter: () => true,
  },
}
const computed = {
  getNotAllowedRoutes: () => ['/', '/services/'],
}

describe('Default layout', () => {
  global.$nuxt = {
    $route: {
      path: '/',
    },
  }
  let wrapper

  const nextTick = jest.fn()
  mocks.$nextTick = nextTick

  beforeEach(() => {
    wrapper = shallowMount(Default, {
      localVue,
      stubs,
      mocks,
      store,
      computed,
    })
  })

  it('renders correctly', () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })

  it('should correctly work initHashLinks method if hash false', () => {
    const QUERY_SELECTOR = jest.fn(() => ({
      scrollIntoView: SCROLL_FN,
    }))
    const callObject = {
      $nextTick: jest.fn(callback => {
        callback()
      }),
    }

    document.querySelector = QUERY_SELECTOR

    wrapper.vm.$options.methods.initHashLinks.call(callObject)

    expect(QUERY_SELECTOR)
      .toHaveBeenCalledTimes(0)
    expect(SCROLL_FN)
      .toHaveBeenCalledTimes(0)
  })

  it('should correctly work initHashLinks method if hash true but selection not found', () => {
    const QUERY_SELECTOR = jest.fn()
    const callObject = {
      $nextTick: jest.fn(callback => {
        callback()
      }),
    }
    window.location.hash = true
    document.querySelector = QUERY_SELECTOR

    wrapper.vm.$options.methods.initHashLinks.call(callObject)

    expect(QUERY_SELECTOR)
      .toHaveBeenCalledTimes(1)
    expect(SCROLL_FN)
      .toHaveBeenCalledTimes(0)
  })

  it('should correctly work initHashLinks method', () => {
    const QUERY_SELECTOR = jest.fn(() => ({
      scrollIntoView: SCROLL_FN,
    }))
    const callObject = {
      $nextTick: jest.fn(callback => {
        callback()
      }),
    }
    window.location.hash = true
    document.querySelector = QUERY_SELECTOR

    wrapper.vm.$options.methods.initHashLinks.call(callObject)
    expect(QUERY_SELECTOR)
      .toHaveBeenCalledTimes(1)
    expect(SCROLL_FN)
      .toHaveBeenCalledWith({ block: 'start' })
  })

  it('should be Not redirected to 404 if the route is allowed', () => {
    push = jest.fn()

    mocks = {
      $nuxt: {
        $on: jest.fn(),
        $route: {
          path: '/',
        },
      },
      $router: {
        push,
      },
    }

    wrapper = shallowMount(Default, {
      localVue,
      stubs,
      mocks,
      store,
      computed: {
        getNotAllowedRoutes: () => [],
      },
    })
    expect(push).not.toHaveBeenCalled()
  })
})

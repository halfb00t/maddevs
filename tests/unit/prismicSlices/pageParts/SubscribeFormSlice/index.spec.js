import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import lazyLoad from 'nuxt-lazy-load/lib/module'
import Vuex from 'vuex'
import SubscribeFormSlice from '@/prismicSlices/pageParts/SubscribeFormSlice'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

jest.mock('~/helpers/generatorUid')

const props = {
  slice: {
    primary: {
      backgroundColor: 'white',
    },
  },
}

const mocks = {
  $getMediaFromS3: jest.fn(),
}

const stubs = ['SubscribeForm']

describe('SubscribeFormSlice component', () => {
  it('should correctly render component', () => {
    const { container } = render(SubscribeFormSlice, {
      propsData: props,
      mocks,
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object from slice props', () => {
    const wrapper = shallowMount(SubscribeFormSlice, {
      propsData: props,
      mocks,
      stubs,
      localVue,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })
})

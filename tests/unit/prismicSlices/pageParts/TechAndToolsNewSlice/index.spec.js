import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import TechAndToolsNewSlice from '@/prismicSlices/pageParts/TechAndToolsNewSlice'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  slice: {
    primary: {
      animation: 'fade-up',
    },
    items: [
      {
        icon: {
          dimensions: {
            width: 45,
            height: 45,
          },
          alt: 'Gitlab Icon',
          copyright: null,
          url: 'https://superpupertest.cdn.prismic.io/superpupertest/4588b69e-4518-4ef0-b9eb-a17b793e06d3_gitlab_icon.svg',
        },
        isBig: true,
        title: 'Gitlab',
        description: 'A library for GPS and Accelerometer data "fusion" with Kalman filter.A library for GPS and Accelerometer data "fusion" with Kalman filter.',
      },
      {
        icon: {
          dimensions: {
            width: 45,
            height: 45,
          },
          alt: 'Gitlab Icon',
          copyright: null,
          url: 'https://superpupertest.cdn.prismic.io/superpupertest/4588b69e-4518-4ef0-b9eb-a17b793e06d3_gitlab_icon.svg',
        },
        isBig: false,
        title: 'Gitlab',
        description: 'A library for GPS and Accelerometer data "fusion" with Kalman filter.A library for GPS and Accelerometer data "fusion" with Kalman filter.',
      },
    ],
    variation: 'default-slice',
  },
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const stubs = ['BigCard', 'LittleCard']

describe('TechAndToolsNewSlice component', () => {
  it('should correctly render component', () => {
    const { container } = render(TechAndToolsNewSlice, {
      propsData: props,
      localVue,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty object from slice props', () => {
    const wrapper = shallowMount(TechAndToolsNewSlice, {
      propsData: props,
      localVue,
      stubs,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })
})

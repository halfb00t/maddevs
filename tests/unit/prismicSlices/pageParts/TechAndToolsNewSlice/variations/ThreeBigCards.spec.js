import { render, screen } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ThreeBigCards from '@/prismicSlices/pageParts/TechAndToolsNewSlice/variations/ThreeBigCards'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  bigCards: [
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
      isBig: true,
      title: 'Gitlab',
      description: 'A library for GPS and Accelerometer data "fusion" with Kalman filter.A library for GPS and Accelerometer data "fusion" with Kalman filter.',
    },
  ],

  littleCards: [
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
      description: '',
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
      description: '',
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
      description: '',
    },
  ],
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('FourBigCards component', () => {
  it('should correctly render component', () => {
    const { container } = render(ThreeBigCards, {
      propsData: props,
      localVue,
    })

    const bigCards = screen.getAllByTestId('tech-big-card')
    const littleCards = screen.getAllByTestId('tech-little-card')

    expect(container).toMatchSnapshot()
    expect(bigCards).toHaveLength(props.bigCards.length)
    expect(littleCards).toHaveLength(props.littleCards.length)
  })

  it('should correctly return empty arrays from default props', () => {
    const wrapper = shallowMount(ThreeBigCards, {
      localVue,
    })

    expect(wrapper.vm.$options.props.bigCards.default.call()).toEqual([])
    expect(wrapper.vm.$options.props.littleCards.default.call()).toEqual([])
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load/lib/module'
import ColoredCard from '@/components/Cases/shared/ColoredCards/ColoredCard'

const props = {
  cardIndex: 1,
  preTitle: 'test pre',
  title: 'Test',
  descriptions: 'Test desc',
  image: {
    width: 100,
    height: 100,
    folder: '/test/',
    file: 'img',
    alt: 'Test Image',
    extension: 'jpg',
    mobileImage: {
      width: 30,
      height: 30,
      file: 'test.jpg',
    },
  },
  colors: {
    card: 'black',
    title: 'white',
    preTitle: 'grey',
    descriptions: 'white',
  },
  pictureRight: false,
  verticalCenteredTitle: false,
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const mocks = {
  $getMediaFromS3: jest.fn(),
}

describe('ColoredCard component', () => {
  it('should correctly render component', () => {
    const { container } = render(ColoredCard, {
      propsData: props,
      localVue,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work method checkMobile', () => {
    Object.defineProperty(global, 'innerWidth', {
      value: 600,
    })

    const wrapper = shallowMount(ColoredCard, {
      propsData: props,
      localVue,
      mocks,
    })

    wrapper.vm.checkMobile()

    expect(wrapper.vm.isMobile).toBeTruthy()
  })

  it('should correctly work default method on props', () => {
    const wrapper = shallowMount(ColoredCard, {
      propsData: props,
      localVue,
      mocks,
    })

    expect(wrapper.vm.$options.props.image.default.call()).toBeUndefined()
    expect(wrapper.vm.$options.props.colors.default.call()).toBeUndefined()
  })
})

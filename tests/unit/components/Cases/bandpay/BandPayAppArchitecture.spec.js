import { render, screen } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import BandPayAppArchitecture from '@/components/Cases/bandpay/BandPayAppArchitecture'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'mad-parallax': () => {},
  'lazy-load': () => {},
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const parallaxTitles = ['Activity / Fragment', 'View model', 'Repository / Service', 'Network module']

describe('BandPay BandPayAppArchitecture component', () => {
  it('should render correctly', () => {
    const { container } = render(BandPayAppArchitecture, {
      mocks,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(BandPayAppArchitecture, {
      mocks,
      directives,
      localVue,
    })

    expect(screen.getByText(/BandPay app architecture/i).className).toBeTruthy()
  })

  it('should render lottie', () => {
    const wrapper = mount(BandPayAppArchitecture, {
      mocks,
      directives,
      localVue,
    })

    const lottieDiv = wrapper.find('.case_lottie')
    expect(lottieDiv.exists()).toBeTruthy()
  })

  it('should render all parallaxCards', () => {
    const wrapper = mount(BandPayAppArchitecture, {
      mocks,
      localVue,
      directives,
    })

    const parallaxCards = wrapper.findAll('.card-content')
    expect(parallaxCards).toHaveLength(4)
  })

  it('should render icons in parallaxCards', () => {
    render(BandPayAppArchitecture, {
      mocks,
      directives,
      localVue,
    })

    screen.getAllByAltText('Icon').forEach(item => {
      expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      expect(item.getAttribute('width')).toBe('51.94')
      expect(item.getAttribute('height')).toBe('51.94')
    })
  })

  it('should parallax cards current titles', () => {
    const wrapper = mount(BandPayAppArchitecture, {
      mocks,
      directives,
      localVue,
    })

    const getTitles = wrapper.findAll('.parallax-title')
    expect(getTitles).toHaveLength(4)
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < getTitles.length; i++) {
      expect(getTitles.at(i).text()).toBe(parallaxTitles[i])
    }
  })
})

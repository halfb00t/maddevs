import { render, screen } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import About from '@/components/Cases/bandpay/About'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BandPay About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      mocks,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(About, {
      mocks,
      directives,
      localVue,
    })

    expect(screen.getByText(/Achievements in figures/i).className).toBeTruthy()
  })

  it('should render lottie', () => {
    const wrapper = mount(About, {
      mocks,
      directives,
      localVue,
    })

    const lottieDiv = wrapper.find('.case_lottie')
    expect(lottieDiv.exists()).toBeTruthy()
  })

  it('should render all statisticCards', () => {
    const wrapper = mount(About, {
      mocks,
      directives,
      localVue,
    })

    const statisticsDivs = wrapper.findAll('.case_statistics-item')
    expect(statisticsDivs).toHaveLength(4)
  })

  it('should render images', () => {
    render(About, {
      mocks,
      directives,
      localVue,
    })

    screen.getAllByTestId('test-icon').forEach(item => {
      expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
    })
  })
})

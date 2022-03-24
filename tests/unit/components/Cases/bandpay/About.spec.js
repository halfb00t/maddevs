import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import About from '@/components/Cases/bandpay/About'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(About, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Achievements in figures/i).className).toBeTruthy()
  })

  it('should render lottie', () => {
    const wrapper = mount(About, {
      mocks,
      directives,
    })

    const lottieDiv = wrapper.find('.case_lottie')
    expect(lottieDiv.exists()).toBeTruthy()
  })

  it('should render all statisticCards', () => {
    const wrapper = mount(About, {
      mocks,
      directives,
    })

    const statisticsDivs = wrapper.findAll('.case_statistics-item')
    expect(statisticsDivs).toHaveLength(4)
  })

  it('should render images', () => {
    render(About, {
      mocks,
      directives,
    })

    screen.getAllByTestId('test-icon').forEach(item => {
      expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
    })
  })
})

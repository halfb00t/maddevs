import { render, screen } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import KeyAchievements from '@/components/Cases/bandpay/KeyAchievements'
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

describe('BandPay KeyAchievements component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyAchievements, {
      mocks,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(KeyAchievements, {
      mocks,
      directives,
      localVue,
    })

    expect(screen.getByText(/Key achievements/i).className).toBeTruthy()
    expect(screen.getByText(/Mad Devs team is a fully-fledged platform where/i).className).toBeTruthy()
    expect(screen.getByText(/While working on the BandPay solution, we managed/i).className).toBeTruthy()
    expect(screen.getByText(/Easy onboarding/i).className).toBeTruthy()
    expect(screen.getByText(/we prepared sufficient project documentation/i).className).toBeTruthy()
    expect(screen.getByText(/Consequently, it takes around 2 days to onboard/i).className).toBeTruthy()
    expect(screen.getByText(/Increased project visibility/i).className).toBeTruthy()
    expect(screen.getByText(/Mad Devs works in close collaboration with our partners from Peklo/i).className).toBeTruthy()
    expect(screen.getByText(/We added a news feed, which shows all recent activities/i).className).toBeTruthy()
    expect(screen.getByText(/As a result, BandPay is 100% visible and transparent/i).className).toBeTruthy()
  })

  it('should render youtube video', () => {
    const wrapper = mount(KeyAchievements, {
      mocks,
      directives,
      localVue,
    })

    const videoFrame = wrapper.find('.case_iframe')
    expect(videoFrame.element.getAttribute('data-src'))
      .toBe('https://www.youtube.com/embed/a0V5qU5oUfA')
  })

  describe('KeyAchievements images', () => {
    it('should render images', () => {
      render(KeyAchievements, {
        mocks,
        directives,
        localVue,
      })

      screen.getAllByTestId('test-picture-img').forEach(item => {
        expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      })
    })
  })
})

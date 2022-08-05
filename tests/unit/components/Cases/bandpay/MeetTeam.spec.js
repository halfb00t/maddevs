import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import MeetTeam from '@/components/Cases/bandpay/MeetTeam'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $refs: {
    meetTheTeamList: document.createElement('div'),
  },
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const data = () => ({
  intoView: true,
})

describe('BandPay MeetTeam component', () => {
  it('should render correctly', () => {
    Object.defineProperty(global.window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: class IntersectionObserver {
        constructor(callback) {
          this.entries = [{ isIntersecting: true, target: mocks.$refs.meetTheTeamList }]
          this.callback = callback
        }

        observe(target) {
          this.entries.push({ isIntersecting: true, target })
          this.callback(this.entries, this)
        }

        // eslint-disable-next-line class-methods-use-this
        unobserve() {
          return jest.fn()
        }
      },
    })

    const { container } = render(MeetTeam, {
      mocks,
      data,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(MeetTeam, {
      mocks,
      data,
      localVue,
    })

    expect(screen.getByText(/Meet the team/i).className).toBeTruthy()
  })
})

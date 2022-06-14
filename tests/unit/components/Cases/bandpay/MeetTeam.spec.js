import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import MeetTeam from '@/components/Cases/bandpay/MeetTeam'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const data = () => ({
  intoView: true,
})

describe('BandPay MeetTeam component', () => {
  it('should render correctly', () => {
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

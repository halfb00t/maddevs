import { render, screen } from '@testing-library/vue'
import MeetTeam from '@/components/Cases/bandpay/MeetTeam'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

const data = () => ({
  intoView: true,
})

describe('BandPay MeetTeam component', () => {
  it('should render correctly', () => {
    const { container } = render(MeetTeam, {
      mocks,
      directives,
      data,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(MeetTeam, {
      mocks,
      directives,
      data,
    })

    expect(screen.getByText(/Meet the team/i).className).toBeTruthy()
  })
})

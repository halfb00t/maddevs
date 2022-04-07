import { render, screen } from '@testing-library/vue'
import ProjectPlanning from '@/components/Cases/bandpay/ProjectPlanning'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay ProjectPlanning component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectPlanning, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(ProjectPlanning, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Project planning and management/i).className).toBeTruthy()
    expect(screen.getByText(/The size of the development team changed/i).className).toBeTruthy()
    expect(screen.getByText(/After the active development phase changed/i).className).toBeTruthy()
    expect(screen.getByText(/After the active development phase changed/i).className).toBeTruthy()
  })

  describe('KeyAchievements images', () => {
    it('should render images', () => {
      render(ProjectPlanning, {
        mocks,
        directives,
      })

      screen.getAllByTestId('test-picture-img').forEach(item => {
        expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      })
    })
  })
})

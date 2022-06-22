import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import ProjectPlanning from '@/components/Cases/bandpay/ProjectPlanning'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BandPay ProjectPlanning component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectPlanning, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(ProjectPlanning, {
      mocks,
      localVue,
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
        localVue,
      })

      screen.getAllByTestId('test-picture-img').forEach(item => {
        expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      })
    })
  })
})

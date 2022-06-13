import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import CardProjectInNumbers from '@/components/Cases/yourcast/CardProjectInNumbers'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('CardProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(CardProjectInNumbers, {
      stubs,
      mocks,
      localVue,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardProjectInNumbers, {
      stubs,
      mocks,
      localVue,
    })
    expect(screen.getByText(/viewers per day/i).className).toBeTruthy()
  })
})

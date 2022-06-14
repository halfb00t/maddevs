import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import ProjectInNumbers from '@/components/Cases/yourcast/ProjectInNumbers'
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

describe('ProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectInNumbers, {
      stubs,
      mocks,
      localVue,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(ProjectInNumbers, {
      stubs,
      mocks,
      localVue,
    })
    expect(screen.getByText(/Project in numbers/i).className).toContain('case_title_h2')
  })
})

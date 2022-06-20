import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import KeyProjectMilestones from '@/components/Cases/yourcast/KeyProjectMilestones'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['OutStuffing', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('KeyProjectMilestones component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyProjectMilestones, {
      stubs,
      mocks,
      localVue,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(KeyProjectMilestones, {
      stubs,
      mocks,
      localVue,
    })
    expect(screen.getByText(/Key project milestones/i)).toBeTruthy()
  })
})

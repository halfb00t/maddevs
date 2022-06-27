import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Challenges from '@/components/Cases/itc/Challenges'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['CardTechSolution', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Challenges component', () => {
  it('should render correctly', () => {
    const { container } = render(Challenges, {
      stubs,
      mocks,
      localVue,
      directives: {
        prlx: () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})

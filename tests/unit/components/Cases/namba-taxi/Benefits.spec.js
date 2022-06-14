import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Benefits from '@/components/Cases/nambataxi/Benefits'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['Picture', 'CardTechSolution']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Benefits component', () => {
  it('should render correctly', () => {
    const { container } = render(Benefits, {
      stubs,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

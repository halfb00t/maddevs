import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const directives = {
  'mad-parallax': () => {},
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('DevelopmentGoals component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals, {
      directives,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })
})

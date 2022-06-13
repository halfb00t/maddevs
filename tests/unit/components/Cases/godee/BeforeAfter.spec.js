import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import BeforeAfter from '@/components/Cases/godee/BeforeAfter.vue'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BeforeAfter component', () => {
  it('should render correctly', () => {
    const { container } = render(BeforeAfter, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display current date', () => {
    render(BeforeAfter, {
      mocks,
      localVue,
    })

    expect(screen.getByText(/GoDee 2018 VS. GoDee/i).innerHTML.trim())
      .toBe(`GoDee 2018 VS. GoDee ${new Date().getFullYear()}`)
  })
})

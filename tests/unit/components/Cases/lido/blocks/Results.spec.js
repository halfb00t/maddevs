import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Results from '../../../../../../client/components/Cases/lido/blocks/Results'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido Results component', () => {
  it('should correctly render component', () => {
    const { container } = render(Results, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

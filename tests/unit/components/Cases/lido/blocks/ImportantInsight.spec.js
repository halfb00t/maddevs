import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import ImportantInsight from '../../../../../../client/components/Cases/lido/blocks/ImportantInsight'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido ImportantInsight component', () => {
  it('should correctly render component', () => {
    const { container } = render(ImportantInsight, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

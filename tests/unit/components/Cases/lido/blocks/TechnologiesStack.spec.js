import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import TechnologiesStack from '../../../../../../client/components/Cases/lido/blocks/TechnologiesStack'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido TechnologiesStack component', () => {
  it('should correctly render component', () => {
    const { container } = render(TechnologiesStack, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import SecondChallenge from '../../../../../../client/components/Cases/lido/blocks/SecondChallenge'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido SecondChallenge component', () => {
  it('should correctly render component', () => {
    const { container } = render(SecondChallenge, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

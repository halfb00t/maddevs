import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import TwitterCard from '../../../../../../client/components/Cases/lido/shared/TwitterCard'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  sourceLink: 'https://maddevs.io',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido TwitterCard shared component', () => {
  it('should correctly render component', () => {
    const { container } = render(TwitterCard, {
      propsData: props,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

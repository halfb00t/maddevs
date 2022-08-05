import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import LidoStatisticsWithTimeline
  from '../../../../../../client/components/Cases/lido/blocks/LidoStatisticsWithTimeline'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido LidoStatisticsWithTimeline component', () => {
  it('should correctly render component', () => {
    const { container } = render(LidoStatisticsWithTimeline, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

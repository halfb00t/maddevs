import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import TheStoryBehindTheProject from '../../../../../../client/components/Cases/lido/blocks/TheStoryBehindTheProject'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido TheStoryBehindTheProject component', () => {
  it('should correctly render component', () => {
    const { container } = render(TheStoryBehindTheProject, {
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})

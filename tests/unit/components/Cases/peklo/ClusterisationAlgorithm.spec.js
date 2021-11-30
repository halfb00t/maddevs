import { render } from '@testing-library/vue'
import ClusterisationAlgorithm from '@/components/Cases/peklo/ClusterisationAlgorithm'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Swiper', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('ClusterisationAlgorithm component', () => {
  it('should render correctly', () => {
    const { container } = render(ClusterisationAlgorithm, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

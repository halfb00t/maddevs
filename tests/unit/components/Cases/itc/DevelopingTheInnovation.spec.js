import { render } from '@testing-library/vue'
import DevelopingTheInnovation from '@/components/Cases/itc/DevelopingTheInnovation'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Lottie', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('DevelopingTheInnovation component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopingTheInnovation, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

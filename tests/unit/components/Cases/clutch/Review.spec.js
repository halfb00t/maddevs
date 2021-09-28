import { render } from '@testing-library/vue'
import Review from '@/components/Cases/clutch/Review'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('Review component', () => {
  it('should render correctly', () => {
    const { container } = render(Review, {
      mocks,
      stubs,
    })
    expect(container).toMatchSnapshot()
  })
})

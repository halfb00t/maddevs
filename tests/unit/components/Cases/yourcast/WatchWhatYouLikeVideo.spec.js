import { render } from '@testing-library/vue'
import WatchWhatYouLikeVideo from '../../../../client/components/Cases/yourcast/WatchWhatYouLikeVideo'

const stubs = ['Picture']

describe('WatchWhatYouLikeVideo component', () => {
  it('should render correctly', () => {
    const { container } = render(WatchWhatYouLikeVideo, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })
    expect(container).toMatchSnapshot()
  })
})

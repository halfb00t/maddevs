import { render } from '@testing-library/vue'
import OngoingProgress from '@/components/Cases/citycam/OngoingProgress'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('OngoingProgress component', () => {
  it('should render correctly', () => {
    const { container } = render(OngoingProgress, { mocks })

    expect(container).toMatchSnapshot()
  })
})

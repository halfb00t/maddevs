import { render } from '@testing-library/vue'
import Standup from '@/components/Cases/clutch/Standup'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Standup component', () => {
  it('should render correctly', () => {
    const { container } = render(Standup, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import DevOps from '@/components/Cases/clutch/DevOps'

const stubs = ['Lottie', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('DevOps component', () => {
  it('should render correctly', () => {
    const { container } = render(DevOps, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

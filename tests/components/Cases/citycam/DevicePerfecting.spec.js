import { render } from '@testing-library/vue'
import DevicePerfecting from '@/components/Cases/citycam/DevicePerfecting'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('DevicePerfecting component', () => {
  it('should render correctly', () => {
    const { container } = render(DevicePerfecting, { mocks })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import Workflow from '@/components/Cases/clutch/Workflow'

const stubs = ['Lottie', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Workflow component', () => {
  it('should render correctly', () => {
    const { container } = render(Workflow, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

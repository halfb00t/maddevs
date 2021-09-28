import { render } from '@testing-library/vue'
import OutStuffing from '@/components/Cases/clutch/OutStuffing'

const stubs = ['OutStuffing', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('OutStuffing component', () => {
  it('should render correctly', () => {
    const { container } = render(OutStuffing, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import WidgetSpeed from '@/components/Cases/clutch/WidgetSpeed'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('WidgetSpeed component', () => {
  it('should render correctly', () => {
    const { container } = render(WidgetSpeed, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})

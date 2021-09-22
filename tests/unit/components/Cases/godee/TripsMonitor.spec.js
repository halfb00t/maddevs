import { render, screen } from '@testing-library/vue'
import TripsMonitor from '@/components/Cases/godee/TripsMonitor.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: true,
}

const stubs = ['Picture']

const directives = {
  'lazy-load': () => {},
}

describe('TripsMonitor component', () => {
  it('should render correctly', () => {
    const { container } = render(TripsMonitor, {
      mocks,
      props,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', async () => {
    render(TripsMonitor, {
      mocks,
      props,
      stubs,
      directives,
    })

    const result = await screen.findAllByTestId('test-case_video-flex-wrapper')
    expect(result).toHaveLength(1)
    expect(screen.getByText(/^[T]rips Monitor/i).className).toContain('case_title_h3')
  })

  it('should hide video block if iphone property false', async () => {
    render(TripsMonitor, {
      mocks,
      props: {
        isIphone: false,
      },
      stubs,
      directives,
    })
    const result = await screen.queryAllByTestId('test-case_video-flex-wrapper')
    expect(result).toHaveLength(0)
  })
})

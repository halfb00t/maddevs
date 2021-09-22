import { render, screen } from '@testing-library/vue'
import RealTimeETA from '@/components/Cases/godee/RealTimeETA.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['NuxtLink', 'Picture']

describe('RealTimeETA component', () => {
  it('should render correctly', () => {
    const { container } = render(RealTimeETA, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(RealTimeETA, {
      stubs,
      mocks,
    })

    expect(screen.getByText(/Real-time ETA/i).className).toContain('case_title_h2')
  })
})

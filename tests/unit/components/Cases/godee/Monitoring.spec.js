import { render, screen } from '@testing-library/vue'
import Monitoring from '@/components/Cases/godee/Monitoring.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('Monitoring component', () => {
  it('should render correctly', () => {
    const { container } = render(Monitoring, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(Monitoring, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/^[M]onitoring/i).className).toContain('case_title_h2')
  })
})

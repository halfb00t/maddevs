import { render, screen } from '@testing-library/vue'
import Grafana from '@/components/Cases/nambafood/Grafana.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('Grafana component', () => {
  it('should render correctly', () => {
    const { container } = render(Grafana, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Grafana, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Grafana — Docker containers’ monitoring service/i).className).toBeTruthy()
  })
})

import { render, screen } from '@testing-library/vue'
import AdminPanel from '@/components/Cases/nambafood/AdminPanel.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('AdminPanel component', () => {
  it('should render correctly', () => {
    const { container } = render(AdminPanel, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(AdminPanel, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Admin panel automates Namba Food’s scalability/i).className).toBeTruthy()
  })
})

import { render, screen } from '@testing-library/vue'
import Collaboration from '@/components/Cases/godee/Collaboration.vue'

describe('Collaboration component', () => {
  it('should render correctly', () => {
    const { container } = render(Collaboration)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Collaboration)

    expect(screen.getByText(/Mad Devs & GoDee collaboration/i).className).toBeTruthy()
  })
})

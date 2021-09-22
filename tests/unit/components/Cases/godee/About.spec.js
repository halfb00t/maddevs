import { render, screen } from '@testing-library/vue'
import About from '@/components/Cases/godee/About.vue'

const stubs = ['TextQuote']

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(About, {
      stubs,
    })

    expect(screen.getByText(/The app-based system allows/i).className).toBeTruthy()
  })
})

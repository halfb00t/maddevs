import { render } from '@testing-library/vue'
import About from '@/components/Cases/peklo/About'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About)

    expect(container).toMatchSnapshot()
  })
})

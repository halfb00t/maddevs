import { render } from '@testing-library/vue'
import About from '@/components/Cases/itc/About'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs: ['TextQuote'],
    })

    expect(container).toMatchSnapshot()
  })
})

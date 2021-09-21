import { render } from '@testing-library/vue'
import About from '@/components/Cases/veeqo/About'

const stubs = ['TextQuote']

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})

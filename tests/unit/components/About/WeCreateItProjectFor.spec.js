import { render, screen } from '@testing-library/vue'
import WeCreateItProjectsFor from '@/components/About/WeCreateItProjectsFor'

describe('WeCreateItProjectsFor', () => {
  it('should render correctly', () => {
    const { container } = render(WeCreateItProjectsFor, {
      directives: {
        'lazy-load': () => {},
      },
    })
    expect(screen.getByTestId('test-we-create-it-projects')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})

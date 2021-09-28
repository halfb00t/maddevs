import { render, screen } from '@testing-library/vue'
import TechStack from '@/components/Cases/clutch/TechStack'

const stubs = ['ListTechnologiesItem']

describe('TechStack component', () => {
  it('should render correctly', () => {
    const { container } = render(TechStack, {
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(TechStack, {
      stubs,
    })
    expect(screen.getByText(/Technology stack/i).className).toContain('case_title_h2')
  })
})

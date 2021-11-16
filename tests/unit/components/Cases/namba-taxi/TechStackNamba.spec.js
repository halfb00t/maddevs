import { render, screen } from '@testing-library/vue'
import TechStackNamba from '@/components/Cases/nambataxi/TechStackNamba'

const stubs = ['ListTechnologiesItem']

describe('TechStackNamba component', () => {
  it('should render correctly', () => {
    const { container } = render(TechStackNamba, {
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(TechStackNamba, {
      stubs,
    })
    expect(screen.getByText(/Technologies we used/i).className).toContain('case_title_h2')
  })
})

import { render } from '@testing-library/vue'
import BenefitsFromPekloTool from '@/components/Cases/peklo/BenefitsFromPekloTool'

const stubs = ['Picture']

describe('BenefitsFromPekloTool component', () => {
  it('should render correctly', () => {
    const { container } = render(BenefitsFromPekloTool, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})

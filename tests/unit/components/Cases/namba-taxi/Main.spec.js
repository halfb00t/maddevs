import { render } from '@testing-library/vue'
import Main from '@/components/Cases/nambataxi/Main'

const stubs = ['About', 'TeamNambaTaxi', 'TechStackNamba', 'MobileApplications', 'FaultTolerance', 'Requirements', 'Benefits']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})

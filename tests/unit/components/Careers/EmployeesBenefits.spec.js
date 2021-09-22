import { render } from '@testing-library/vue'
import EmployeesBenefits from '@/components/Careers/EmployeesBenefits'

const stubs = ['BenefitCard', 'UISlider']

const mocks = {
  $t: () => 'translated',
}

describe('EmployeesBenefits component', () => {
  it('should render correctly', () => {
    const { container } = render(EmployeesBenefits, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})

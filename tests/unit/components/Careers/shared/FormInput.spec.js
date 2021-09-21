import 'regenerator-runtime'
import { render } from '@testing-library/vue'
import FormInput from '@/components/Careers/shared/FormInput'
import PositionForm from '@/components/Careers/shared/PositionForm'

describe('FormInput component', () => {
  it('should render correctly', () => {
    const { container } = render(FormInput, { parentComponent: PositionForm })

    expect(container).toMatchSnapshot()
  })
})

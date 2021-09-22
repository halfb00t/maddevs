import { render } from '@testing-library/vue'
import ModelOptimal from '@/components/DeliveryModels/ModelOptimal'

describe('ModelOptimal component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelOptimal)

    expect(container).toMatchSnapshot()
  })
})

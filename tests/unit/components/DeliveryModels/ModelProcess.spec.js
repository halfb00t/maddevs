import { render } from '@testing-library/vue'
import ModelProcess from '@/components/DeliveryModels/ModelProcess'

describe('ModelProcess component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelProcess)

    expect(container).toMatchSnapshot()
  })
})

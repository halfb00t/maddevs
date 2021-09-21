import { render } from '@testing-library/vue'
import ModelBanner from '@/components/DeliveryModels/ModelBanner'

describe('ModelBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelBanner)

    expect(container).toMatchSnapshot()
  })
})

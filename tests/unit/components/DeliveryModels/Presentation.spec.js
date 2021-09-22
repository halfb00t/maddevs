import { render } from '@testing-library/vue'
import Presentation from '@/components/DeliveryModels/Presentation'

describe('Presentation component', () => {
  it('should render correctly', () => {
    const { container } = render(Presentation)

    expect(container).toMatchSnapshot()
  })
})

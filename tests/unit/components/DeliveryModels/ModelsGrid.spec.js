import { render } from '@testing-library/vue'
import ModelsGrid from '@/components/DeliveryModels/ModelsGrid'

const stubs = ['ModelCard']

describe('ModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelsGrid, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})

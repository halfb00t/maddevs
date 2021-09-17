import { render, screen } from '@testing-library/vue'
import CardsBusinessModelsGrid from '@/components/Cases/nambafood/cards/CardsBusinessModelsGrid.vue'

describe('CardsBusinessModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(CardsBusinessModelsGrid, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs: ['Picture'],
    })

    expect(screen.getAllByText(/Personal courier/i)).toHaveLength(2)
    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModelsGrid from '@/components/DeliveryModels/ModelsGrid'

const stubs = ['ModelCard', 'LazyHydrate']

describe('ModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelsGrid, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports ModelsGrid component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(ModelsGrid, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
      })

      const ModelCard = await container.vm.$options.components.ModelCard.call()

      expect(ModelCard.default.name).toBe('ModelCard')
    })
  })
})

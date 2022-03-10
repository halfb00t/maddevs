import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EmployeesBenefits from '@/components/Careers/EmployeesBenefits'

const stubs = ['LazyHydrate', 'BenefitCard', 'UISlider']

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

  describe('Dynamic imports EmployeesBenefits component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(EmployeesBenefits, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
          $t: () => 'translated',
        },
      })

      const BenefitCard = await container.vm.$options.components.BenefitCard.call()
      const UISlider = await container.vm.$options.components.UISlider.call()

      expect(BenefitCard.default.name).toBe('BenefitCard')
      expect(UISlider.default.name).toBe('UISlider')
    })
  })
})

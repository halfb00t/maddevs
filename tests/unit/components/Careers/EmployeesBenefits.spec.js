import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import EmployeesBenefits from '@/components/Careers/EmployeesBenefits'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const stubs = ['LazyHydrate', 'BenefitCard', 'UISlider']

const mocks = {
  $t: () => 'translated',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('EmployeesBenefits component', () => {
  it('should render correctly', () => {
    const { container } = render(EmployeesBenefits, {
      stubs,
      mocks,
      localVue,
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
        localVue,
      })

      const BenefitCard = await container.vm.$options.components.BenefitCard.call()
      const UISlider = await container.vm.$options.components.UISlider.call()

      expect(BenefitCard.default.name).toBe('BenefitCard')
      expect(UISlider.default.name).toBe('UISlider')
    })
  })
})

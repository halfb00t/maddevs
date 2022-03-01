import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import OpenPositions from '@/components/Careers/OpenPositions'

const stubs = ['LazyHydrate', 'PositionsFilter', 'PositionsGrid']

const mocks = {
  $t: () => 'translated',
}

describe('OpenPositions component', () => {
  it('should render correctly', () => {
    const { container } = render(OpenPositions, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports EmployeesBenefits component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(OpenPositions, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
          $t: () => 'translated',
        },
      })

      const PositionsFilter = await container.vm.$options.components.PositionsFilter.call()

      expect(PositionsFilter.default.name).toBe('PositionsFilter')
    })
  })
})

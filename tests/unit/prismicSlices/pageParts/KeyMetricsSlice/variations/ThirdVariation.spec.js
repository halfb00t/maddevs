import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import ThirdVariation from '@/prismicSlices/pageParts/KeyMetricsSlice/variations/ThirdVariation'

const props = {
  colorTheme: 'black',
  metrics: [
    {
      title: 'First metric title',
      subtitle: 'First metric subtitle',
    },
  ],
}

describe('KeyMetrics slice - ThirdVariation component', () => {
  it('should render correctly with data', () => {
    const { container } = render(ThirdVariation, {
      props,
    })

    expect(screen.getAllByTestId('key-metric')).toHaveLength(props.metrics.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(ThirdVariation, {
      props: {
        metrics: [],
      },
    })

    expect(screen.queryByTestId('key-metric')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('colorThemeOption computed method', () => {
    it('should return\'black\'', () => {
      const wrapper = shallowMount(ThirdVariation, {
        propsData: {
          metrics: [],
          colorTheme: 'black',
        },
      })

      expect(wrapper.vm.colorThemeOption).toBe('black')
      expect(wrapper.vm.$options.props.metrics.default.call()).toEqual([])
    })

    it('should return \'white\'', () => {
      const wrapper = shallowMount(ThirdVariation, {
        propsData: {
          metrics: [],
          colorTheme: 'unknown',
        },
      })

      expect(wrapper.vm.colorThemeOption).toBe('white')
    })
  })
})

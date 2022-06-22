import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import SecondVariation from '@/prismicSlices/pageParts/KeyMetricsSlice/variations/SecondVariation'

const defaultTitle = 'Mad Devs’ key metrics'

const props = {
  colorTheme: 'black',
  metrics: [
    {
      title: 'First metric title',
      subtitle: 'First metric subtitle',
    },
    {
      title: 'Second metric title',
      subtitle: 'Second metric subtitle',
    },
  ],
}

describe('KeyMetrics slice - SecondVariation component', () => {
  it('should render correctly with data', () => {
    const { container } = render(SecondVariation, {
      props,
    })

    expect(screen.getByText(defaultTitle)).not.toBeNull()
    expect(screen.getAllByTestId('key-metric')).toHaveLength(props.metrics.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(SecondVariation, {
      props: {
        metrics: [],
      },
    })

    expect(screen.getByText(defaultTitle)).not.toBeNull()
    expect(screen.queryByTestId('key-metric')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('colorThemeOption computed method', () => {
    it('should return \'black\'', () => {
      const wrapper = shallowMount(SecondVariation, {
        propsData: {
          metrics: [],
          colorTheme: 'black',
        },
      })

      expect(wrapper.vm.colorThemeOption).toBe('black')
    })

    it('should return \'white\'', () => {
      const wrapper = shallowMount(SecondVariation, {
        propsData: {
          metrics: [],
          colorTheme: 'unknown',
        },
      })

      expect(wrapper.vm.colorThemeOption).toBe('white')
      expect(wrapper.vm.$options.props.metrics.default.call()).toEqual([])
    })
  })
})

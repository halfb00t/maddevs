import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import FirstVariation from '@/prismicSlices/pageParts/KeyMetricsSlice/variations/FirstVariation'

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
    {
      title: 'Third metric title',
      subtitle: 'Third metric subtitle',
    },
  ],
}

describe('KeyMetrics slice - FirstVariation component', () => {
  it('should render correctly with data', () => {
    const { container } = render(FirstVariation, {
      props,
    })

    expect(screen.getByText(defaultTitle)).not.toBeNull()
    expect(screen.getAllByTestId('key-metric')).toHaveLength(props.metrics.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(FirstVariation, {
      props: {
        metrics: [],
      },
    })

    expect(screen.getByText(defaultTitle)).not.toBeNull()
    expect(screen.queryByTestId('key-metric')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly return empty array from default props', () => {
    const wrapper = shallowMount(FirstVariation, {
      propsData: props,
    })

    expect(wrapper.vm.$options.props.metrics.default.call()).toEqual([])
  })
})

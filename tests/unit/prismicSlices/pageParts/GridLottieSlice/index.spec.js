import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import GridLottieMain from '@/prismicSlices/pageParts/GridLottieSlice'

const apiData = {
  background: 'black',
  animation: 'fade-up',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

const stubs = ['GridLottieLink', 'LazyHydrate', 'GridLottie']

describe('Card Grid slice', () => {
  it('should correctly render CardGrid component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(GridLottieMain, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('card-lottie')).not.toBeNull()
    expect(screen.queryByTestId('card-lottie-link')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render CardGridWithIcon component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'gridLottieLink'
    const { container } = render(GridLottieMain, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('card-lottie')).toBeNull()
    expect(screen.queryByTestId('card-lottie-link')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('Dynamic imports GridLottieMain', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(GridLottieMain)

      const GridLottieLink = await container.vm.$options.components.GridLottieLink.call()
      const GridLottie = await container.vm.$options.components.GridLottie.call()

      expect(GridLottieLink.default.name).toBe('GridLottieLink')
      expect(GridLottie.default.name).toBe('GridLottie')
    })
  })
})

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

jest.mock('~/helpers/generatorUid')

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
      const props = getProps(apiData)
      props.slice.variation = 'gridLottieLink'
      const container = shallowMount(GridLottieMain, { propsData: props })

      const GridLottieLink = await container.vm.$options.components.GridLottieLink.call()
      const GridLottie = await container.vm.$options.components.GridLottie.call()
      const GridWithAnimationOptionSlice = await container.vm.$options.components.GridWithAnimationOptionSlice.call()

      expect(GridLottieLink.default.name).toBe('GridLottieLink')
      expect(GridLottie.default.name).toBe('GridLottie')
      expect(GridWithAnimationOptionSlice.default.name).toBe('GridWithAnimationOptionSlice')
    })
  })
})

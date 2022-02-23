import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import GridLottieMain from '@/prismicSlices/pageParts/GridLottieSlice'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

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

  describe('sliceBackground computed method', () => {
    it('should return white hex', () => {
      const wrapper = shallowMount(GridLottieMain, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(GridLottieMain, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(GridLottieMain, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(GridLottieMain, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })

  describe('Dymanic imports GridLottieSlice', () => {
    beforeEach(() => {
      jest.resetModules()
    })
    it('should find text in dymanic imports GridLottie', async () => {
      const App = (await import('@/prismicSlices/pageParts/GridLottieSlice/variations/GridLottie')).default
      const wrapper = shallowMount(App)

      expect(wrapper.find('.grid-lottie__grid').exists()).toBe(true)
    })
    it('should find text in dymanic imports GridLottieLink', async () => {
      const App = (await import('@/prismicSlices/pageParts/GridLottieSlice/variations/GridLottieLink')).default
      const wrapper = shallowMount(App)

      expect(wrapper.find('.grid-lottie__grid').exists()).toBe(true)
    })
  })
})

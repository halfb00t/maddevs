import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import StartScreenMain from '@/prismicSlices/pageParts/StartScreen'
import { getFakePropsByParams } from './testsUtils'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
}

describe('StartScreen slice', () => {
  it('should correctly render CardGrid component', () => {
    const props = getFakePropsByParams(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(StartScreenMain, {
      props,
    })

    expect(screen.queryByTestId('start-screen-variation')).not.toBeNull()
    expect(screen.queryByTestId('description-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render CardGridWithIcon component', () => {
    const props = getFakePropsByParams(apiData)
    props.slice.variation = 'cardGridWithIcon'
    const { container } = render(StartScreenMain, {
      props,
    })

    expect(screen.queryByTestId('start-screen-variation')).toBeNull()
    expect(screen.queryByTestId('description-variation')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('sliceBackground computed method', () => {
    it('should return white hex', () => {
      const wrapper = shallowMount(StartScreenMain, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(StartScreenMain, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(StartScreenMain, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(StartScreenMain, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})

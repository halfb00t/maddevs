import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import TechnologiesAndTools from '@/prismicSlices/pageParts/TechnologiesAndTools'
import { getFakePropsByParams } from './testUtils'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
}

describe('Technologies and Tools Grid slice', () => {
  it('should correctly render TechnologiesAndTools component', () => {
    const variation = 'default-slice'
    const props = getFakePropsByParams(apiData, { variation })

    const { container } = render(TechnologiesAndTools, {
      props,
    })

    expect(screen.queryByTestId('technologies-grid-variation')).not.toBeNull()
    expect(screen.queryByTestId('tools-grid-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render CardGridWithIcon component', () => {
    const variation = 'not-default-slice'
    const props = getFakePropsByParams(apiData, { variation })

    const { container } = render(TechnologiesAndTools, {
      props,
    })

    expect(screen.queryByTestId('tools-grid-variation')).not.toBeNull()
    expect(screen.queryByTestId('technologies-grid-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('sliceBackground computed method', () => {
    it('should return white hex', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getFakePropsByParams({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})

import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import TechnologiesAndTools from '@/prismicSlices/pageParts/TechnologiesAndTools'

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

describe('Technologies and Tools Grid slice', () => {
  it('should correctly render TechnologiesAndTools component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(TechnologiesAndTools, {
      props,
    })

    expect(screen.queryByTestId('technologies-grid-variation')).not.toBeNull()
    expect(screen.queryByTestId('tools-grid-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render CardGridWithIcon component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'not-default-slice'
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
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(TechnologiesAndTools, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})

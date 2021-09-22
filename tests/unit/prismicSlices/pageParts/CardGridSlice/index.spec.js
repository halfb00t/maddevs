import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import CardGridSlice from '@/prismicSlices/pageParts/CardGridSlice'

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

describe('Card Grid slice', () => {
  it('should correctly render CardGrid component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(CardGridSlice, {
      props,
    })

    expect(screen.queryByTestId('card-grid-variation')).not.toBeNull()
    expect(screen.queryByTestId('card-grid-with-icon-variation')).toBeNull()
    expect(screen.queryByTestId('rich-text-card-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render CardGridWithIcon component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'cardGridWithIcon'
    const { container } = render(CardGridSlice, {
      props,
    })

    expect(screen.queryByTestId('card-grid-variation')).toBeNull()
    expect(screen.queryByTestId('card-grid-with-icon-variation')).not.toBeNull()
    expect(screen.queryByTestId('rich-text-card-variation')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render RichTextCard component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'richTextCards'
    const { container } = render(CardGridSlice, {
      props,
    })

    expect(screen.queryByTestId('card-grid-variation')).toBeNull()
    expect(screen.queryByTestId('card-grid-with-icon-variation')).toBeNull()
    expect(screen.queryByTestId('rich-text-card-variation')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('sliceBackground computed method', () => {
    it('should return white hex', () => {
      const wrapper = shallowMount(CardGridSlice, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(CardGridSlice, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(CardGridSlice, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(CardGridSlice, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})

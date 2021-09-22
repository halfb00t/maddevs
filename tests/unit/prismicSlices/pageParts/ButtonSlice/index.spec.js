import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ButtonSlice from '@/prismicSlices/pageParts/ButtonSlice'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
  link: {
    url: 'url',
  },
  alignment: 'center',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('Button slice', () => {
  it('should correctly render UIButton', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'

    const { container } = render(ButtonSlice, {
      props,
    })

    expect(screen.queryByTestId('button-ui')).not.toBeNull()
    expect(screen.queryByTestId('button-outline')).toBeNull()
    expect(screen.queryByTestId('button-link')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render UIOutlinedButton', () => {
    const props = getProps(apiData)
    props.slice.variation = 'outlinedButton'

    const { container } = render(ButtonSlice, {
      props,
    })

    expect(screen.queryByTestId('button-ui')).toBeNull()
    expect(screen.queryByTestId('button-outline')).not.toBeNull()
    expect(screen.queryByTestId('button-link')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render UILinkButton', () => {
    const props = getProps(apiData)
    props.slice.variation = 'linkButton'

    const { container } = render(ButtonSlice, {
      props,
    })

    expect(screen.queryByTestId('button-ui')).toBeNull()
    expect(screen.queryByTestId('button-outline')).toBeNull()
    expect(screen.queryByTestId('button-link')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('Button slice background computed method', () => {
    it('should return background white', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return background grey', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return background black', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })

  describe('Button slice data-aos animation attribute', () => {
    it('should container the data-aos to be fade-up', () => {
      render(ButtonSlice, {
        props: getProps(apiData),
      })

      expect(screen.getByTestId('button-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should container the data-aos to be null', () => {
      render(ButtonSlice, {
        props: getProps({}),
      })
      expect(screen.getByTestId('button-slice-container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('Button slice href attribute', () => {
    it('UIButton should render correctly url', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
        }),
      })

      expect(wrapper.vm.$props.slice.primary.link.url).toBe(apiData.link.url)
    })

    it('UIButton should render null', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({}),
      })

      expect(wrapper.vm.$props.slice.primary.link).toBeUndefined()
    })
  })

  describe('Button slice alignment computed method', () => {
    it('should return alignment center', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
        }),
      })

      expect(wrapper.vm.sliceAlignment).toBe(apiData.alignment)
    })

    it('should return alignment left', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
          alignment: '',
        }),
      })

      expect(wrapper.vm.sliceAlignment).toBe('left')
    })

    it('should return alignment right', () => {
      const wrapper = shallowMount(ButtonSlice, {
        propsData: getProps({
          ...apiData,
          alignment: 'right',
        }),
      })

      expect(wrapper.vm.sliceAlignment).toBe('right')
    })
  })
})

import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import TextSlice from '@/prismicSlices/pageParts/TextSlice'

const resizeWindow = width => {
  global.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

const apiData = {
  xl: '90px',
  lg: '80px',
  md: '70px',
  sm: '60px',
  xs: '50px',
  colorTheme: 'silver',
}

const getProps = params => ({
  slice: {
    primary: {
      'size-xl': params?.xl,
      'size-lg': params?.lg,
      'size-md': params?.md,
      'size-sm': params?.sm,
      'size-xs': params?.xs,
      colorTheme: params?.colorTheme,
    },
  },
})

const stubs = ['SimpleText', 'Title', 'TitleText', 'TitleTextButton', 'Paragraph', 'FlexibleParagraph', 'LazyHydrate']

describe('Spacer slice', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TextSlice, {
      propsData: getProps(apiData),
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('if window.innerWidth is less than 768px, the size is 50px', async () => {
    resizeWindow(768)
    expect(wrapper.vm.size).toBe('50px')
  })

  it('if window.innerWidth is less than 1024px and more than 768px, the size is 60px', async () => {
    resizeWindow(1024)
    expect(wrapper.vm.size).toBe('60px')
  })

  it('if window.innerWidth is less than 1200px and more than 1024px, the size is 70px', async () => {
    resizeWindow(1200)
    expect(wrapper.vm.size).toBe('70px')
  })

  it('if window.innerWidth is less than 1440px and more than 1200px, the size is 80px', async () => {
    resizeWindow(1366)
    expect(wrapper.vm.size).toBe('80px')
  })

  it('if window.innerWidth is more than 1440px, the size is 90px', async () => {
    resizeWindow(1441)
    expect(wrapper.vm.size).toBe('90px')
  })

  describe('Check fallback logic', () => {
    it('if window.innerWidth is less than 768px and size-xs is empty, the size is 60px from size-sm', async () => {
      resizeWindow(768)
      wrapper = shallowMount(TextSlice, {
        propsData: getProps({ ...apiData, xs: '' }),
      })
      expect(wrapper.vm.size).toBe('60px')
    })

    it('if window.innerWidth is less than 768px and size-xs & size-sm & size-md is empty, the size is 60px from size-lg', async () => {
      resizeWindow(768)
      wrapper = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          xs: '',
          sm: '',
          md: '',
        }),
      })
      expect(wrapper.vm.size).toBe('80px')
    })
  })
})

describe('TextSlice slice', () => {
  it('should correctly render SimpleText component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(TextSlice, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('text-slice-default')).not.toBeNull()
    expect(screen.queryByTestId('text-slice-title')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleText')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleTextButton')).toBeNull()
    expect(screen.queryByTestId('text-slice-paragraph')).toBeNull()
    expect(screen.queryByTestId('text-slice-flexibleParagraph')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly render Title component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'title'
    const { container } = render(TextSlice, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('text-slice-default')).toBeNull()
    expect(screen.queryByTestId('text-slice-title')).not.toBeNull()
    expect(screen.queryByTestId('text-slice-titleText')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleTextButton')).toBeNull()
    expect(screen.queryByTestId('text-slice-paragraph')).toBeNull()
    expect(screen.queryByTestId('text-slice-flexibleParagraph')).toBeNull()
    expect(container).toMatchSnapshot()
  })
  it('should correctly render TitleText component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'titleText'
    const { container } = render(TextSlice, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('text-slice-default')).toBeNull()
    expect(screen.queryByTestId('text-slice-title')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleText')).not.toBeNull()
    expect(screen.queryByTestId('text-slice-titleTextButton')).toBeNull()
    expect(screen.queryByTestId('text-slice-paragraph')).toBeNull()
    expect(screen.queryByTestId('text-slice-flexibleParagraph')).toBeNull()
    expect(container).toMatchSnapshot()
  })
  it('should correctly render titleTextButton component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'titleTextButton'
    const { container } = render(TextSlice, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('text-slice-default')).toBeNull()
    expect(screen.queryByTestId('text-slice-title')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleText')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleTextButton')).not.toBeNull()
    expect(screen.queryByTestId('text-slice-paragraph')).toBeNull()
    expect(screen.queryByTestId('text-slice-flexibleParagraph')).toBeNull()
    expect(container).toMatchSnapshot()
  })
  it('should correctly render paragraph component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'paragraph'
    const { container } = render(TextSlice, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('text-slice-default')).toBeNull()
    expect(screen.queryByTestId('text-slice-title')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleText')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleTextButton')).toBeNull()
    expect(screen.queryByTestId('text-slice-paragraph')).not.toBeNull()
    expect(screen.queryByTestId('text-slice-flexibleParagraph')).toBeNull()
    expect(container).toMatchSnapshot()
  })
  it('should correctly render flexibleParagraph component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'flexibleParagraph'
    const { container } = render(TextSlice, {
      props,
      stubs,
    })

    expect(screen.queryByTestId('text-slice-default')).toBeNull()
    expect(screen.queryByTestId('text-slice-title')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleText')).toBeNull()
    expect(screen.queryByTestId('text-slice-titleTextButton')).toBeNull()
    expect(screen.queryByTestId('text-slice-paragraph')).toBeNull()
    expect(screen.queryByTestId('text-slice-flexibleParagraph')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('sliceBackground computed method', () => {
    it('should return white hex', () => {
      const wrapper = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          colorTheme: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe('#ffffff')
      expect(wrapper.vm.colorThemeClass).toBe('text-slice--white-theme')
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          colorTheme: 'silver',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe('#f4f4f4')
      expect(wrapper.vm.colorThemeClass).toBe('text-slice--white-theme')
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          colorTheme: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe('#111213')
      expect(wrapper.vm.colorThemeClass).toBe('text-slice--black-theme')
    })

    it('should return null', () => {
      const wrapper = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          colorTheme: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
      expect(wrapper.vm.colorThemeClass).toBe('text-slice--white-theme')
    })
  })

  describe('Dynamic imports TextSlice', () => {
    it('should correctly import components', async () => {
      resizeWindow(768)
      const container = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          xs: '',
          sm: '',
          md: '',
        }),
      })

      const Title = await container.vm.$options.components.Title.call()
      const SimpleText = await container.vm.$options.components.SimpleText.call()
      const TitleText = await container.vm.$options.components.TitleText.call()
      const TitleTextButton = await container.vm.$options.components.TitleTextButton.call()
      const Paragraph = await container.vm.$options.components.Paragraph.call()
      const FlexibleParagraph = await container.vm.$options.components.FlexibleParagraph.call()

      expect(Title.default.name).toBe('TitleSlice')
      expect(SimpleText.default.name).toBe('SimpleText')
      expect(TitleText.default.name).toBe('TitleText')
      expect(TitleTextButton.default.name).toBe('TitleTextButton')
      expect(Paragraph.default.name).toBe('ParagraphSlice')
      expect(FlexibleParagraph.default.name).toBe('FlexibleParagraph')
    })
  })
})

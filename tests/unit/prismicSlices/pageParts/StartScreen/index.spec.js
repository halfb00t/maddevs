import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import StartScreen from '@/prismicSlices/pageParts/StartScreen'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const gradients = {
  black: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)',
  white: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #ffffff)',
  grey: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #f5f7f9)',
}

jest.mock('~/helpers/generatorUid')

const apiData = {
  background: 'black',
  gradientColor: 'black',
  image: {
    url: 'url',
    alt: 'alt',
  },
  imageOpacity: 0.3,
  title: 'StartScreen title',
  subtitle: 'StartScreen subtitle',
}

const startScreenEbookData = {
  slice: {
    primary: {
      imageOpacity: 0.9,
      image: {
        url: 'img.jpg',
        alt: 'img',
      },
      title: 'Test title',
      subtitle: 'Test subtitle',
      background: backgrounds.black,
      gradientColor: gradients.black,
      rightImage: {
        url: 'img.jpg',
        alt: 'img',
      },
      btnText: 'Test text',
      btnLink: '',
      modal: 'download-pdf',
      ebookPath: 'pdf/test-ebook.pdf',
      ebookName: 'test-ebook',
      ebookImage: {
        url: 'img.jpg',
        alt: 'Image',
      },
    },
    variation: 'startScreenImageRightAndButton',
  },
}

const mocks = {
  $prismic: {
    asText: text => text[0].text,
  },
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    variation: 'default-slice',
  },
})

describe('StartScreen slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(StartScreen, {
      props: getProps(apiData),
    })

    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(screen.getByText(apiData.subtitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(StartScreen, {
      props: getProps({}),
    })

    expect(screen.queryByTestId('start-screen-slice__title')).not.toBeNull()
    expect(screen.queryByTestId('start-screen-slice__subtitle')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white} (white)`, () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey} (grey)`, () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black} (black)`, () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })

  describe('sliceGradient computed method', () => {
    it(`should return ${gradients.white} (white gradient)`, () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          gradientColor: 'white',
        }),
      })

      expect(wrapper.vm.sliceGradient).toBe(gradients.white)
    })

    it(`should return ${gradients.grey} (grey gradient)`, () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          gradientColor: 'grey',
        }),
      })

      expect(wrapper.vm.sliceGradient).toBe(gradients.grey)
    })

    it(`should return ${gradients.black} (black gradient)`, () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          gradientColor: 'black',
        }),
      })

      expect(wrapper.vm.sliceGradient).toBe(gradients.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(StartScreen, {
        propsData: getProps({
          ...apiData,
          gradientColor: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceGradient).toBe('')
    })
  })

  it('should correctly render StartScreenImageRightAndButton component', () => {
    const { container } = render(StartScreen, {
      propsData: startScreenEbookData,
      mocks,
    })

    expect(screen.queryByTestId('start-screen-slice')).toBeNull()
    expect(screen.queryByTestId('start-screen-slice-with-image')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object from slice props', () => {
    const wrapper = shallowMount(StartScreen, {
      propsData: getProps({
        ...apiData,
        gradientColor: 'black',
      }),
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })
})

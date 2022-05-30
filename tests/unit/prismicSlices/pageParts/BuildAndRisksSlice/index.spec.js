import { shallowMount } from '@vue/test-utils'
import { screen, render } from '@testing-library/vue'
import BuildAndRisksSlice from '@/prismicSlices/pageParts/BuildAndRisksSlice'

const stubs = ['PrismicRichText']

const mocks = {
  $prismic: {
    asHtml: jest.fn(),
  },
}

const props = {
  slice: {
    primary: {
      animation: 'fade-up',
      title: [{
        text: 'Test title',
        type: 'heading4',
      }],
      titleColor: '#ffffff',
      buttonBgColor: 'white',
      buttonLink: {
        url: 'https://google.com/',
      },
      description: [
        { text: 'Any blockchain technology requires to follow principles that ensure open, transparent, and secure.' },
      ],
      buttonText: 'Read Ebook',
      BackgroundColor: 'black',
      outerBgColor: 'black',
      image: {
        url: 'https://via.placeholder.com/150',
        alt: 'test image',
        dimensions: {
          width: 150,
          height: 150,
        },
      },
    },
    slice_type: 'build_and_risks_slice',
  },
}

describe('BuildAndRisksSlice component', () => {
  it('should render correctly with data', () => {
    const wrapper = shallowMount(BuildAndRisksSlice, {
      propsData: props,
      stubs,
      mocks,
    })

    expect(wrapper.find('.main-block__title').exists()).toBeTruthy()
    expect(wrapper.find('.main-block__description').exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render image', () => {
    render(BuildAndRisksSlice, {
      propsData: props,
      stubs,
      mocks,
    })

    const image = screen.getByTestId('main-block__img-block-image')
    expect(image.getAttribute('data-src')).toBe(props.slice.primary.image.url)
    expect(image.getAttribute('alt')).toBe(props.slice.primary.image.alt)
    expect(Number(image.getAttribute('width'))).toBe(338)
    expect(Number(image.getAttribute('height'))).toBe(477)
  })

  it('should render with default slice props', () => {
    const wrapper = shallowMount(BuildAndRisksSlice, {
      stubs,
      propsData: props,
      mocks,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should call computed property with includes slice_type', () => {
    const wrapper = shallowMount(BuildAndRisksSlice, {
      propsData: props,
      stubs,
      mocks,
    })

    expect(wrapper.vm.serializer).toBe(wrapper.vm.htmlSerializer)
  })

  it('should call computed property with not includes slice_type', () => {
    props.slice.slice_type = ''
    const wrapper = shallowMount(BuildAndRisksSlice, {
      propsData: props,
      stubs,
      mocks,
    })

    expect(wrapper.vm.serializer).toBeNull()
  })
})

describe('htmlSerializer', () => {
  let wrapper = null

  const slice = {
    slice: {
      primary: {
        title: [{
          text: 'Test title',
          type: 'heading4',
        }],
        description: 'Test description',
        background: 'black',
        textColor: 'black',
        image: {
          url: 'https://via.placeholder.com/150',
          alt: 'test image',
          dimensions: {
            width: 150,
            height: 150,
          },
        },
      },
      slice_type: 'card_with_image_slice',
    },
  }

  beforeEach(() => {
    wrapper = shallowMount(BuildAndRisksSlice, {
      stubs,
      propsData: slice,
      mocks: {
        $prismic: {
          dom: {
            RichText: {
              Elements: {
                heading2: 'heading2',
                heading3: 'heading3',
                heading4: 'heading4',
                heading5: 'heading5',
                heading6: 'heading6',
                preformatted: 'preformatted',
              },
            },
          },
          asHtml: jest.fn(),
        },
      },
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('if type not heading will return null', () => {
    const result = wrapper.vm.htmlSerializer('div', null, null, ['Custom page card title'])
    expect(result).toBeNull()
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['Custom page card title'])
    expect(result).toBe('<h2>Custom page card title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['Custom page card title'])
    expect(result).toBe('<h3>Custom page card title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['Custom page card title'])
    expect(result).toBe('<h4>Custom page card title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['Custom page card title'])
    expect(result).toBe('<h5>Custom page card title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['Custom page card title'])
    expect(result).toBe('<h6>Custom page card title</h6>')
  })
})

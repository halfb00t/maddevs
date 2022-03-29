import { shallowMount } from '@vue/test-utils'
import { screen, render } from '@testing-library/vue'
import CardWithImageSlice from '@/prismicSlices/pageParts/CardWithImageSlice'

const stubs = ['PrismicRichText']

const props = {
  slice: {
    primary: {
      title: [{
        text: 'Test title',
        type: 'heading4',
      }],
      description: 'Test description',
      background: 'silver',
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

describe('CardWithImageSlice component', () => {
  it('should render correctly with data', () => {
    const wrapper = shallowMount(CardWithImageSlice, {
      propsData: props,
      stubs,
    })

    expect(wrapper.find('.card-with-image__title').exists()).toBeTruthy()
    expect(wrapper.find('.card-with-image__description').exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render image', () => {
    render(CardWithImageSlice, {
      propsData: props,
      stubs,
    })

    const image = screen.getByTestId('card-with-image__image')
    expect(image.getAttribute('data-src')).toBe(props.slice.primary.image.url)
    expect(image.getAttribute('alt')).toBe(props.slice.primary.image.alt)
    expect(Number(image.getAttribute('width'))).toBe(props.slice.primary.image.dimensions.width)
    expect(Number(image.getAttribute('height'))).toBe(props.slice.primary.image.dimensions.height)
  })

  it('should render with default slice props', () => {
    const wrapper = shallowMount(CardWithImageSlice, {
      stubs,
      propsData: props,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should call computed property with includes slice_type', () => {
    const wrapper = shallowMount(CardWithImageSlice, {
      propsData: props,
      stubs,
    })

    expect(wrapper.vm.serializer).toBe(wrapper.vm.htmlSerializer)
  })

  it('should call computed property with not includes slice_type', () => {
    props.slice.slice_type = ''
    const wrapper = shallowMount(CardWithImageSlice, {
      propsData: props,
      stubs,
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
        background: 'silver',
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
    wrapper = shallowMount(CardWithImageSlice, {
      stubs,
      propsData: slice,
      mocks: {
        $prismic: {
          dom: {
            RichText: {
              Elements: {
                heading1: 'heading1',
                heading2: 'heading2',
                heading3: 'heading3',
                heading4: 'heading4',
                heading5: 'heading5',
                heading6: 'heading6',
                preformatted: 'preformatted',
              },
            },
          },
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

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['Custom page card title'])
    expect(result).toBe('<h1>Custom page card title</h1>')
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

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` Custom page card title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> Custom page card title</h6>')
  })
})

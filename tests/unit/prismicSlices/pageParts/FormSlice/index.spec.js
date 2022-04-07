import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import FormSlice from '@/prismicSlices/pageParts/FormSlice'

const props = {
  slice: {
    primary: {
      title: [{
        text: 'Test title',
        type: 'heading4',
      }],
      image: {
        url: 'img.jpg',
        alt: 'Test img',
      },
      bookPath: 'pdf/test-book.pdf',
      bookName: 'Test book',
      animation: 'fade-up',
      containerSize: '1026',
    },
    slice_type: 'form_slice',
  },
}

const stubs = ['PrismicRichText', 'EbookForm']

const mocks = {
  $prismic: {
    asText: text => text[0].text,
  },
}

const directives = {
  'lazy-load': jest.fn(),
}

describe('FormSlice component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(FormSlice, {
      propsData: props,
      mocks,
      stubs,
      directives,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should correctly render FormSlice component', () => {
    const { container } = render(FormSlice, {
      propsData: props,
      mocks,
      stubs,
      directives,
    })

    expect(screen.queryByTestId('form-slice__title')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object from slice props', () => {
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should return null from serializer computed method', () => {
    wrapper.vm.slice.slice_type = 'test'
    expect(wrapper.vm.serializer).toBeNull()
  })
})

describe('htmlSerializer', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(FormSlice, {
      stubs,
      propsData: props,
      mocks: {
        $prismic: {
          asText: text => text[0].text,
          dom: {
            RichText: {
              Elements: {
                heading1: 'heading1',
                heading2: 'heading2',
                heading3: 'heading3',
                heading4: 'heading4',
                heading5: 'heading5',
                heading6: 'heading6',
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
    const result = wrapper.vm.htmlSerializer('div', null, null, ['FormSlice title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['FormSlice title'])
    expect(result).toBe('<h1>FormSlice title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['FormSlice title'])
    expect(result).toBe('<h2>FormSlice title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['FormSlice title'])
    expect(result).toBe('<h3>FormSlice title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['FormSlice title'])
    expect(result).toBe('<h4>FormSlice title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['FormSlice title'])
    expect(result).toBe('<h5>FormSlice title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['FormSlice title'])
    expect(result).toBe('<h6>FormSlice title</h6>')
  })

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` FormSlice title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> FormSlice title</h6>')
  })
})

import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import AccordionSlice from '@/prismicSlices/pageParts/AccordionSlice'

const toOneLine = text => text
  .replace(/ +(?= )/g, '')
  .replace(/\n/g, '')
  .replace(/>(.*?)</g, '><')
  .trim()

const props = {
  slice: {
    primary: {
      mainTitle: [{
        text: 'Test',
        type: 'heading2',
      }],
      containerSize: '1026',
    },
    items: [{
      question: 'Test question',
      answer: 'Test answer',
    }],
    slice_type: 'accordion_slice',
  },
}

const mocks = {
  $prismic: {
    asText: text => text[0].text,
    asHtml: text => text[0].text,
  },
}

const stubs = ['PrismicRichText']

describe('AccordionSlice component', () => {
  it('should correctly render component', () => {
    const { container } = render(AccordionSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(screen.queryByTestId('accordion-slice__title')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correct return default value props slice', () => {
    const wrapper = shallowMount(AccordionSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should return null from serializer computed method', () => {
    props.slice.slice_type = 'test'
    const wrapper = shallowMount(AccordionSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(wrapper.vm.serializer).toBeNull()
  })
})

describe('htmlSerializer', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(AccordionSlice, {
      stubs,
      propsData: props,
      mocks: {
        $prismic: {
          asText: text => text[0].text,
          asHtml: text => text[0].text,
          dom: {
            Link: {
              url: () => '',
            },
            RichText: {
              Elements: {
                em: 'em',
                embed: 'embed',
                heading1: 'heading1',
                heading2: 'heading2',
                heading3: 'heading3',
                heading4: 'heading4',
                heading5: 'heading5',
                heading6: 'heading6',
                hyperlink: 'hyperlink',
                image: 'image',
                label: 'label',
                list: 'group-list-item',
                listItem: 'list-item',
                oList: 'group-o-list-item',
                oListItem: 'o-list-item',
                paragraph: 'paragraph',
                preformatted: 'preformatted',
                span: 'span',
                strong: 'strong',
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

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` AccordionSlice title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> AccordionSlice title</h6>')
  })

  it('if type not heading will return null', () => {
    const result = wrapper.vm.htmlSerializer('div', null, null, ['AccordionSlice post title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<h1>AccordionSlice post title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<h2>AccordionSlice post title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<h3>AccordionSlice post title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<h4>AccordionSlice post title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<h5>AccordionSlice post title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<h6>AccordionSlice post title</h6>')
  })

  it('if type paragraph will return <p>AccordionSlice post title</p>', () => {
    const result = wrapper.vm.htmlSerializer('paragraph', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<p>AccordionSlice post title</p>')
  })

  it('if type preformatted will return <pre>AccordionSlice post title</pre>', () => {
    const result = wrapper.vm.htmlSerializer('preformatted', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<pre>AccordionSlice post title</pre>')
  })

  it('if type strong will return <strong>AccordionSlice post title</strong>', () => {
    const result = wrapper.vm.htmlSerializer('strong', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<strong>AccordionSlice post title</strong>')
  })

  it('if type em will return <em>AccordionSlice post title</em>', () => {
    const result = wrapper.vm.htmlSerializer('em', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<em>AccordionSlice post title</em>')
  })

  it('if type list-item will return <li>AccordionSlice post title</li>', () => {
    const result = wrapper.vm.htmlSerializer('list-item', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<li>AccordionSlice post title</li>')
  })

  it('if type o-list-item will return <li>AccordionSlice post title</li>', () => {
    const result = wrapper.vm.htmlSerializer('o-list-item', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<li>AccordionSlice post title</li>')
  })

  it('if type group-list-item will return <ul>AccordionSlice post title</ul>', () => {
    const result = wrapper.vm.htmlSerializer('group-list-item', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<ul>AccordionSlice post title</ul>')
  })

  it('if type group-o-list-item will return <ol>AccordionSlice post title</ol>', () => {
    const result = wrapper.vm.htmlSerializer('group-o-list-item', null, null, ['AccordionSlice post title'])
    expect(result).toBe('<ol>AccordionSlice post title</ol>')
  })

  it('if type span and content null will return empty string', () => {
    const result = wrapper.vm.htmlSerializer('span', null, null, ['AccordionSlice post title'])
    expect(result).toBe('')
  })

  it('if type span will return "AccordionSlice post <br /> title"', () => {
    const result = wrapper.vm.htmlSerializer('span', null, 'AccordionSlice post \n title', ['AccordionSlice post title'])
    expect(result).toBe('AccordionSlice post <br /> title')
  })

  it('if type embed will return embed html', () => {
    const element = {
      oembed: {
        provider_name: '',
        type: '',
        embed_url: '',
        html: 'html',
      },
    }
    const embedHtml = '<div data-oembed="" data-oembed-type="" data-oembed-provider="" ></div>'
    const result = wrapper.vm.htmlSerializer('embed', element, null, ['AccordionSlice post title'])
    expect(toOneLine(result)).toStrictEqual(toOneLine(embedHtml))
  })

  describe('hyperlink tests', () => {
    it('if type hyperlink & without target will return <a href=""></a>', () => {
      const element = {
        data: {
          target: null,
        },
      }
      const hyperlinkHtml = '<a href=""></a>'
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['AccordionSlice post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(hyperlinkHtml))
    })

    it('if type hyperlink will return <a target="_blank" rel="noopener" href=""></a>', () => {
      const element = {
        data: {
          target: '_blank',
        },
      }

      const hyperlinkHtml = '<a target="_blank" rel="noopener" href=""></a>'
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['AccordionSlice post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(hyperlinkHtml))
    })
  })

  describe('label tests', () => {
    it('if type label will return <span class="label"></span>', () => {
      const element = {
        data: {
          label: 'label',
        },
      }
      const labelHtml = '<span class="label"></span>'
      const result = wrapper.vm.htmlSerializer('label', element, null, ['AccordionSlice post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(labelHtml))
    })

    it('if type label & without label will return <span ></span>', () => {
      const element = {
        data: {
          label: null,
        },
      }
      const labelHtml = '<span ></span>'
      const result = wrapper.vm.htmlSerializer('label', element, null, ['AccordionSlice post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(labelHtml))
    })
  })

  it('if type image will return html for img', () => {
    const element = {
      linkTo: {
        target: '_blank',
      },
      label: '',
      url: '',
      alt: '',
    }
    const imageHtml = '<p class=" block-img"><img src="" alt="Image" copyright=""></p>'
    const result = wrapper.vm.htmlSerializer('image', element, null, ['AccordionSlice post title'])
    expect(toOneLine(result)).toStrictEqual(toOneLine(imageHtml))
  })
})

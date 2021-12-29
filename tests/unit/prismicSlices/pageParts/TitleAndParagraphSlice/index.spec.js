import { shallowMount } from '@vue/test-utils'
import TitleAndParagraphSlice from '@/prismicSlices/pageParts/TitleAndParagraphSlice'

const toOneLine = text => text
  .replace(/ +(?= )/g, '')
  .replace(/\n/g, '')
  .replace(/>(.*?)</g, '><')
  .trim()

const stubs = ['PrismicRichText']

const props = {
  slice: {
    primary: {
      title: [
        {
          text: 'Title',
          type: 'heading2',
        },
      ],
      description: [
        {
          text: 'Description',
          type: 'paragraph',
        },
      ],
      maxWidth: '500px',
    },
  },
}

describe('TitleAndParagraphSlice component', () => {
  it('should render correctly with data', () => {
    const wrapper = shallowMount(TitleAndParagraphSlice, {
      propsData: props,
      stubs,
    })

    expect(wrapper.find('.content__title').exists()).toBe(true)
    expect(wrapper.find('.content__description').exists()).toBe(true)
    expect(wrapper.vm.cssVars).toEqual({ margin: '0 auto', 'max-width': '500px' })
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    props.slice.primary.title = [{}]
    props.slice.primary.description = [{}]

    const wrapper = shallowMount(TitleAndParagraphSlice, {
      propsData: props,
      stubs,
    })

    expect(wrapper).toMatchSnapshot()
  })
})

describe('htmlSerializer', () => {
  let wrapper = null
  const slice = {
    primary: {
      title: [
        {
          type: 'heading1',
          text: 'sample text',
        },
      ],
      description: [
        {
          text: 'Description',
          type: 'paragraph',
        },
      ],
      maxWidth: '500px',
    },
  }

  beforeEach(() => {
    wrapper = shallowMount(TitleAndParagraphSlice, {
      stubs,
      propsData: {
        slice,
      },
      mocks: {
        $prismic: {
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

  it('if type not heading will return null', () => {
    const result = wrapper.vm.htmlSerializer('div', null, null, ['Blog post title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['Blog post title'])
    expect(result).toBe('<h1>Blog post title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['Blog post title'])
    expect(result).toBe('<h2>Blog post title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['Blog post title'])
    expect(result).toBe('<h3>Blog post title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['Blog post title'])
    expect(result).toBe('<h4>Blog post title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['Blog post title'])
    expect(result).toBe('<h5>Blog post title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['Blog post title'])
    expect(result).toBe('<h6>Blog post title</h6>')
  })

  it('if type paragraph will return <p>Blog post title</p>', () => {
    const result = wrapper.vm.htmlSerializer('paragraph', null, null, ['Blog post title'])
    expect(result).toBe('<p>Blog post title</p>')
  })

  it('if type preformatted will return <pre>Blog post title</pre>', () => {
    const result = wrapper.vm.htmlSerializer('preformatted', null, null, ['Blog post title'])
    expect(result).toBe('<pre>Blog post title</pre>')
  })

  it('if type strong will return <strong>Blog post title</strong>', () => {
    const result = wrapper.vm.htmlSerializer('strong', null, null, ['Blog post title'])
    expect(result).toBe('<strong>Blog post title</strong>')
  })

  it('if type em will return <em>Blog post title</em>', () => {
    const result = wrapper.vm.htmlSerializer('em', null, null, ['Blog post title'])
    expect(result).toBe('<em>Blog post title</em>')
  })

  it('if type list-item will return <li>Blog post title</li>', () => {
    const result = wrapper.vm.htmlSerializer('list-item', null, null, ['Blog post title'])
    expect(result).toBe('<li>Blog post title</li>')
  })

  it('if type o-list-item will return <li>Blog post title</li>', () => {
    const result = wrapper.vm.htmlSerializer('o-list-item', null, null, ['Blog post title'])
    expect(result).toBe('<li>Blog post title</li>')
  })

  it('if type group-list-item will return <ul>Blog post title</ul>', () => {
    const result = wrapper.vm.htmlSerializer('group-list-item', null, null, ['Blog post title'])
    expect(result).toBe('<ul>Blog post title</ul>')
  })

  it('if type group-o-list-item will return <ol>Blog post title</ol>', () => {
    const result = wrapper.vm.htmlSerializer('group-o-list-item', null, null, ['Blog post title'])
    expect(result).toBe('<ol>Blog post title</ol>')
  })

  it('if type span and content null will return empty string', () => {
    const result = wrapper.vm.htmlSerializer('span', null, null, ['Blog post title'])
    expect(result).toBe('')
  })

  it('if type span will return "Blog post <br /> title"', () => {
    const result = wrapper.vm.htmlSerializer('span', null, 'Blog post \n title', ['Blog post title'])
    expect(result).toBe('Blog post <br /> title')
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
    const result = wrapper.vm.htmlSerializer('embed', element, null, ['Blog post title'])
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
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['Blog post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(hyperlinkHtml))
    })

    it('if type hyperlink will return <a target="_blank" rel="noopener" href=""></a>', () => {
      const element = {
        data: {
          target: '_blank',
        },
      }

      const hyperlinkHtml = '<a target="_blank" rel="noopener" href=""></a>'
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['Blog post title'])
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
      const result = wrapper.vm.htmlSerializer('label', element, null, ['Blog post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(labelHtml))
    })

    it('if type label & without label will return <span ></span>', () => {
      const element = {
        data: {
          label: null,
        },
      }
      const labelHtml = '<span ></span>'
      const result = wrapper.vm.htmlSerializer('label', element, null, ['Blog post title'])
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
    const result = wrapper.vm.htmlSerializer('image', element, null, ['Blog post title'])
    expect(toOneLine(result)).toStrictEqual(toOneLine(imageHtml))
  })
})

import { render, screen } from '@testing-library/vue'
import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import StartScreenImageRightAndButton
  from '@/prismicSlices/pageParts/StartScreen/variations/StartScreenImageRightAndButton/StartScreenImageRightAndButton'

const toOneLine = text => text
  .replace(/ +(?= )/g, '')
  .replace(/\n/g, '')
  .replace(/>(.*?)</g, '><')
  .trim()

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

jest.mock('~/helpers/generatorUid')

const gradients = {
  black: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 0, #111213 100%)',
  white: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #ffffff)',
  grey: 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #f5f7f9)',
}

const startScreenEbookData = {
  slice: {
    primary: {
      imageOpacity: 0.9,
      image: {
        url: 'img.jpg',
        alt: 'img',
      },
      title: [{
        text: 'Test title',
      }],
      subtitle: [{
        text: 'Test subtitle',
      }],
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
    slice_type: 'start_screen_slice',
  },
}

const mocks = {
  $prismic: {
    asText: text => text[0].text,
  },
}

const stubs = ['UIButton', 'PrismicRichText']

let mockShow = null

describe('StartScreenImageRightAndButton component', () => {
  let wrapper = null

  beforeEach(() => {
    mockShow = jest.fn()

    wrapper = shallowMount(StartScreenImageRightAndButton, {
      propsData: startScreenEbookData,
      mocks,
      stubs,
    })
  })

  afterEach(() => {
    mockShow = null
    wrapper = null
  })

  it('should correctly render startScreenImageRightAndButton', () => {
    const { container } = render(StartScreenImageRightAndButton, {
      propsData: startScreenEbookData,
      mocks,
      stubs,
    })

    expect(screen.queryByTestId('start-screen-slice__title')).not.toBeNull()
    expect(screen.queryByTestId('start-screen-slice__subtitle')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object from slice props', () => {
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  describe('sliceGradient computed method', () => {
    it(`should return ${backgrounds.black} (black gradient)`, () => {
      startScreenEbookData.slice.primary.gradientColor = 'black'
      wrapper = shallowMount(StartScreenImageRightAndButton, {
        propsData: startScreenEbookData,
        mocks,
        stubs,
      })
      expect(wrapper.vm.sliceGradient).toBe(gradients.black)
    })

    it(`should return ${backgrounds.white} (white gradient)`, () => {
      startScreenEbookData.slice.primary.gradientColor = 'white'
      wrapper = shallowMount(StartScreenImageRightAndButton, {
        propsData: startScreenEbookData,
        mocks,
        stubs,
      })
      expect(wrapper.vm.sliceGradient).toBe(gradients.white)
    })

    it(`should return ${backgrounds.grey} (grey gradient)`, () => {
      startScreenEbookData.slice.primary.gradientColor = 'grey'
      wrapper = shallowMount(StartScreenImageRightAndButton, {
        propsData: startScreenEbookData,
        mocks,
        stubs,
      })
      expect(wrapper.vm.sliceGradient).toBe(gradients.grey)
    })
  })

  it('should return null from serializer computed method', () => {
    wrapper.vm.slice.slice_type = 'test'
    expect(wrapper.vm.serializer).toBeNull()
  })

  it('if call method "showModalEbook" and ref modalEbook is undefined > "showModalEbook" method in ref modalEbook not call', () => {
    wrapper.vm.showModalEbook()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('should open modal window send ebook', () => {
    const wrapperTestModal = shallowMount(StartScreenImageRightAndButton, {
      propsData: startScreenEbookData,
      mocks,
      stubs: {
        NuxtLink: RouterLinkStub,
        PrismicRichText: {
          render(h) { return h('div') },
        },
        ModalEbook: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
    })

    wrapperTestModal.vm.showModalEbook()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})

describe('htmlSerializer', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(StartScreenImageRightAndButton, {
      propsData: startScreenEbookData,
      stubs,
      mocks: {
        $prismic: {
          asText: text => text[0].text,
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
    const result = wrapper.vm.htmlSerializer('div', null, null, ['StartScreenImage title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['StartScreenImage title'])
    expect(result).toBe('<h1>StartScreenImage title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['StartScreenImage title'])
    expect(result).toBe('<h2>StartScreenImage title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['StartScreenImage title'])
    expect(result).toBe('<h3>StartScreenImage title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['StartScreenImage title'])
    expect(result).toBe('<h4>StartScreenImage title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['StartScreenImage title'])
    expect(result).toBe('<h5>StartScreenImage title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['StartScreenImage title'])
    expect(result).toBe('<h6>StartScreenImage title</h6>')
  })

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` Custom page card title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> Custom page card title</h6>')
  })

  it('if type paragraph will return <p>StartScreenImage title</p>', () => {
    const result = wrapper.vm.htmlSerializer('paragraph', null, null, ['StartScreenImage title'])
    expect(result).toBe('<p>StartScreenImage title</p>')
  })

  it('if type preformatted will return <pre>StartScreenImage title</pre>', () => {
    const result = wrapper.vm.htmlSerializer('preformatted', null, null, ['StartScreenImage title'])
    expect(result).toBe('<pre>StartScreenImage title</pre>')
  })

  it('if type strong will return <strong>StartScreenImage title</strong>', () => {
    const result = wrapper.vm.htmlSerializer('strong', null, null, ['StartScreenImage title'])
    expect(result).toBe('<strong>StartScreenImage title</strong>')
  })

  it('if type em will return <em>StartScreenImage title</em>', () => {
    const result = wrapper.vm.htmlSerializer('em', null, null, ['StartScreenImage title'])
    expect(result).toBe('<em>StartScreenImage title</em>')
  })

  it('if type list-item will return <li>StartScreenImage title</li>', () => {
    const result = wrapper.vm.htmlSerializer('list-item', null, null, ['StartScreenImage title'])
    expect(result).toBe('<li>StartScreenImage title</li>')
  })

  it('if type o-list-item will return <li>StartScreenImage title</li>', () => {
    const result = wrapper.vm.htmlSerializer('o-list-item', null, null, ['StartScreenImage title'])
    expect(result).toBe('<li>StartScreenImage title</li>')
  })

  it('if type group-list-item will return <ul>StartScreenImage title</ul>', () => {
    const result = wrapper.vm.htmlSerializer('group-list-item', null, null, ['StartScreenImage title'])
    expect(result).toBe('<ul>StartScreenImage title</ul>')
  })

  it('if type group-o-list-item will return <ol>StartScreenImage title</ol>', () => {
    const result = wrapper.vm.htmlSerializer('group-o-list-item', null, null, ['StartScreenImage title'])
    expect(result).toBe('<ol>StartScreenImage title</ol>')
  })

  it('if type span and content null will return empty string', () => {
    const result = wrapper.vm.htmlSerializer('span', null, null, ['StartScreenImage title'])
    expect(result).toBe('')
  })

  it('if type span will return "StartScreenImage <br /> title"', () => {
    const result = wrapper.vm.htmlSerializer('span', null, 'StartScreenImage \n title', ['StartScreenImage title'])
    expect(result).toBe('StartScreenImage <br /> title')
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
    const result = wrapper.vm.htmlSerializer('embed', element, null, ['StartScreenImage title'])
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
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['StartScreenImage title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(hyperlinkHtml))
    })

    it('if type hyperlink will return <a target="_blank" rel="noopener" href=""></a>', () => {
      const element = {
        data: {
          target: '_blank',
        },
      }

      const hyperlinkHtml = '<a target="_blank" rel="noopener" href=""></a>'
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['StartScreenImage title'])
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
      const result = wrapper.vm.htmlSerializer('label', element, null, ['StartScreenImage title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(labelHtml))
    })

    it('if type label & without label will return <span ></span>', () => {
      const element = {
        data: {
          label: null,
        },
      }
      const labelHtml = '<span ></span>'
      const result = wrapper.vm.htmlSerializer('label', element, null, ['StartScreenImage title'])
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
    const result = wrapper.vm.htmlSerializer('image', element, null, ['StartScreenImage title'])
    expect(toOneLine(result)).toStrictEqual(toOneLine(imageHtml))
  })
})

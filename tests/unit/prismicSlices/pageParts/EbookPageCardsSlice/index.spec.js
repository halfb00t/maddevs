import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EbookPageCardsSlice from '@/prismicSlices/pageParts/EbookPageCardsSlice'

const props = {
  slice: {
    primary: {
      title: [{
        text: 'Test title',
        type: 'heading2',
      }],
      animation: 'fade-up',
      btnText: 'Test text',
      btnLink: 'https://maddevs.io/ebooks',
      containerSize: '1026',
    },
    items: [
      {
        data: {
          id: 'test',
        },
      },
    ],
    slice_type: 'ebook_page_cards_slice',
  },
}

const testResultData = [
  {
    data: {
      body: [{
        primary: {
          rightImage: {
            url: 'img.jpg',
            alt: 'Image',
          },
          title: [{
            text: 'Test title',
            type: 'heading5',
          }],
          subtitle: [{
            text: 'test description',
            type: 'paragraph',
          }],
        },
      }],
    },
    uid: 'test-page',
    id: 'test',
  },
]

const stubs = ['PrismicRichText', 'EbookCard', 'UIButton']

const mocks = {
  $prismic: {
    asText: text => text[0].text,
    api: {
      getByIDs: jest.fn(() => new Promise(resolve => resolve({ results: testResultData }))),
    },
  },
}

describe('EbookPageCardsSlice component', () => {
  it('should correctly render component', () => {
    const { container } = render(EbookPageCardsSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(screen.queryByTestId('ebook-cards__title')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object from slice props', () => {
    const wrapper = shallowMount(EbookPageCardsSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should return null from serializer computed method', () => {
    props.slice.slice_type = 'test'
    const wrapper = shallowMount(EbookPageCardsSlice, {
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
    wrapper = shallowMount(EbookPageCardsSlice, {
      stubs,
      propsData: props,
      mocks: {
        $prismic: {
          asText: text => text[0].text,
          api: {
            getByIDs: jest.fn(() => new Promise(resolve => resolve({ results: testResultData }))),
          },
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
    const result = wrapper.vm.htmlSerializer('div', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBe('<h1>EbookPageCardsSlice title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBe('<h2>EbookPageCardsSlice title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBe('<h3>EbookPageCardsSlice title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBe('<h4>EbookPageCardsSlice title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBe('<h5>EbookPageCardsSlice title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['EbookPageCardsSlice title'])
    expect(result).toBe('<h6>EbookPageCardsSlice title</h6>')
  })

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` EbookPageCardsSlice title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> EbookPageCardsSlice title</h6>')
  })
})

import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EbookPostsSectionSlice from '@/prismicSlices/pageParts/PostsSectionSlice/variations/EbookPostsSectionSlice'

const props = {
  slice: {
    primary: {
      title: [{
        text: 'Test title',
        type: 'heading4',
      }],
      animation: 'fade-up',
      containerSize: '1026',
    },
    slice_type: 'posts_section_slice',
  },
  posts: [{
    data: {
      title: [{
        text: 'Test title',
        type: 'heading5',
      }],
    },
  }],
}

const mocks = {
  $prismic: {
    asText: text => text[0].text,
  },
}

const stubs = ['UIButton', 'SkeletonBlogWidget', 'PrismicRichText', 'PostCard']

describe('EbookPostsSectionSlice component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(EbookPostsSectionSlice, {
      propsData: props,
      mocks,
      stubs,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should correctly render component', () => {
    const { container } = render(EbookPostsSectionSlice, {
      propsData: props,
      stubs,
      mocks,
    })

    expect(screen.queryByTestId('ebook-posts__title')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object and array from props', () => {
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
    expect(wrapper.vm.$options.props.posts.default.call()).toEqual([])
  })

  it('should return null from serializer computed method', () => {
    props.slice.slice_type = 'null'
    wrapper = shallowMount(EbookPostsSectionSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(wrapper.vm.serializer).toBeNull()
  })

  it('should call method getMoreArticles', () => {
    wrapper.vm.getMoreArticles.call()
    expect(wrapper.vm.showMore).toBeTruthy()
  })
})

describe('htmlSerializer', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(EbookPostsSectionSlice, {
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
    const result = wrapper.vm.htmlSerializer('div', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBe('<h1>EbookPostsSectionsSlice title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBe('<h2>EbookPostsSectionsSlice title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBe('<h3>EbookPostsSectionsSlice title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBe('<h4>EbookPostsSectionsSlice title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBe('<h5>EbookPostsSectionsSlice title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['EbookPostsSectionsSlice title'])
    expect(result).toBe('<h6>EbookPostsSectionsSlice title</h6>')
  })

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` EbookPostsSectionsSlice title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> EbookPostsSectionsSlice title</h6>')
  })
})

import { render, screen } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import CardsWithIcon from '@/prismicSlices/pageParts/CardsWithIcon'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  slice: {
    primary: {
      animation: 'fade-up',
      containerSize: '1240',
    },
    items: [{
      title: [{
        text: 'Test title',
        type: 'heading4',
      }],
      iconImage: {
        url: 'img.jpg',
        alt: 'Test image',
      },
      description: 'Test description',
    }],
    slice_type: 'cards_with_icon',
  },
}

const mocks = {
  $prismic: {
    asText: text => text[0].text,
  },
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const stubs = ['PrismicRichText']

describe('CardsWithIcon component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(CardsWithIcon, {
      propsData: props,
      mocks,
      localVue,
      stubs,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should correctly render component', () => {
    const container = render(CardsWithIcon, {
      propsData: props,
      localVue,
      mocks,
      stubs,
    })

    expect(screen.queryByTestId('cards-with-icons__item-title')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should return empty object from slice props', () => {
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should return null from serializer computed method', () => {
    wrapper.vm.slice.slice_type = 'unknown'
    expect(wrapper.vm.serializer).toBeNull()
  })
})

describe('htmlSerializer', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(CardsWithIcon, {
      stubs,
      propsData: props,
      localVue,
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
    const result = wrapper.vm.htmlSerializer('div', null, null, ['CardsWithIcon title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<h1>CardsWithIcon title</h1>')
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<h2>CardsWithIcon title</h2>')
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<h3>CardsWithIcon title</h3>')
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<h4>CardsWithIcon title</h4>')
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<h5>CardsWithIcon title</h5>')
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<h6>CardsWithIcon title</h6>')
  })

  it('if type heading6 will return html with pre code text', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['`<em>ololo</em>` CardsWithIcon title'])
    expect(result).toBe('<h6><code class="inline-code"><em>ololo</em></code> CardsWithIcon title</h6>')
  })

  it('if type strong will return <strong>CardsWithIcon title</strong>', () => {
    const result = wrapper.vm.htmlSerializer('strong', null, null, ['CardsWithIcon title'])
    expect(result).toBe('<strong>CardsWithIcon title</strong>')
  })
})

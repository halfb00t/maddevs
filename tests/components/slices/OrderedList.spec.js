import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import OrderedList from '@/components/slices/OrderedList'

const slice = {
  items: [
    { list_item: 'list item 1' },
    { list_item: 'list item 2' },
    { list_item: 'list item 3' },
    { list_item: 'list item 4' },
    { list_item: 'list item 5' },
  ],
  primary: {
    list_introduction: 'list introduction',
  },
}
const stubs = ['PrismicRichText']

const mocks = {
  $prismic: {
    asText: text => text,
    asHtml: text => text,
  },
}

describe('orderedListSlice component', () => {
  it('should render correctly with data', () => {
    const { container } = render(OrderedList, {
      props: {
        slice,
        htmlSerializer: () => null,
      },
      stubs,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
  it('the htmlSerializer should to be return null', () => {
    const wrapper = shallowMount(OrderedList, {
      propsData: {
        slice: {
          items: [],
          primary: {
            list_introduction: '',
          },
        },
        htmlSerializer: () => null,
      },
      stubs: ['PrismicRichText'],
      mocks: {},
    })
    expect(wrapper.vm.htmlSerializer()).toBeNull()
  })
})

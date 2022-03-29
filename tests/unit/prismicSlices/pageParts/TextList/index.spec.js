import { shallowMount } from '@vue/test-utils'
import { screen, render } from '@testing-library/vue'
import TextList from '@/prismicSlices/pageParts/TextList'

const props = {
  slice: {
    primary: {
      title: 'Test title',
      items: [
        {
          listText: 'lorem 1',
        },
        {
          listText: 'lorem 2',
        },
        {
          listText: 'lorem 3',
        },
      ],
    },
    variation: 'default-slice',
  },
}

describe('TextList slice component', () => {
  it('should render component correctly with text', () => {
    const wrapper = render(TextList, {
      propsData: props,
    })

    expect(screen.getByText(/Test title/i).className).toBeTruthy()
    expect(screen.queryByTestId('two-columns')).toBeNull()
    expect(screen.queryByTestId('default-list')).not.toBeNull()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with variation twoColumns', () => {
    props.slice.variation = 'twoColumnsList'
    const wrapper = render(TextList, {
      propsData: props,
    })

    expect(screen.queryByTestId('two-columns')).not.toBeNull()
    expect(screen.queryByTestId('default-list')).toBeNull()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render component without title', () => {
    props.slice.primary.title = ''
    const wrapper = render(TextList, {
      propsData: props,
    })

    expect(wrapper.queryByText(/Test title/i)).toBeFalsy()
  })

  it('should correctly mount with default props', () => {
    const container = shallowMount(TextList, {
      propsData: props,
    })

    expect(container.vm.$options.props.slice.default.call()).toEqual({})
  })
})

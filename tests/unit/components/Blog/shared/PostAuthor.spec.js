import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import PostAuthor from '@/components/Blog/shared/PostAuthor'

const mocks = {
  $prismic: {
    asText: text => text,
  },
}

const props = {
  document: {
    author: 'some-author',
    image: {
      url: 'some-url',
      thumbnail: {
        url: '',
        alt: '',
        dimensions: {},
      },
    },
    author_title: 'author_title',
  },
}

describe('text slice component', () => {
  it('should render correctly', () => {
    const { container } = render(PostAuthor, {
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work link method', () => {
    const callObject = {
      uid: 'uid',
    }
    const wrapper = shallowMount(PostAuthor, {
      propsData: props,
      mocks,
    })

    const result = wrapper.vm.$options.computed.link.call(callObject)

    expect(result).toBe(`/blog/author/${callObject.uid}/`)
  })

  it('should correct work shortTitle method', () => {
    const callObject = {
      name: 'name',
    }
    const wrapper = shallowMount(PostAuthor, {
      propsData: props,
      mocks,
    })

    const result = wrapper.vm.$options.computed.shortTitle.call(callObject)

    expect(result).toBe(callObject.name)
  })
})

import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
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

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

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

    expect(result).toBe(`/blog/authors/${callObject.uid}/`)
  })

  it('should correct work shortTitle method', () => {
    const callObject = {
      name: 'name',
    }

    props.image = {
      url: 'img.jpg',
      alt: 'test',
      dimensions: {
        width: 100,
        height: 100,
      },
      thumbnail: {
        url: 'img.jpg',
        alt: 'test',
        dimensions: {
          width: 30,
          height: 30,
        },
      },
    }
    const wrapper = shallowMount(PostAuthor, {
      propsData: props,
      mocks,
      localVue,
    })

    const headResult = wrapper.vm.$metaInfo
    const headExpected = {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: 'img.jpg',
        },
      ],
    }

    const result = wrapper.vm.$options.computed.shortTitle.call(callObject)

    expect(result).toBe(callObject.name)
    expect(headResult).toEqual(headExpected)
  })
})

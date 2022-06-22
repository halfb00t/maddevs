import { render } from '@testing-library/vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TagPostsSection from '@/components/Blog/Main/TagPostsSection'
import tagPosts from '../../../__mocks__/tagPosts'
import initializeLazyLoad from '@/helpers/lazyLoad'

const localVue = createLocalVue()

localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogTag: () => 'Blog tag',
    tagPostsCount: () => 5,
    tagPostsLoaded: () => true,
    allAuthors: () => [
      {
        id: '1',
      }, {
        id: '2',
      }, {
        id: '3',
      },
    ],
    tagPostsPage: () => 1,
    tagPosts: () => tagPosts,
  },
}

const stubs = ['FeaturedPost', 'NuxtLink', 'PostCard']

jest.mock('@/helpers/lazyLoad', () => ({
  initializeLazyLoad: jest.fn(),
}))

describe('TagPostsSection component', () => {
  it('should render correctly', () => {
    const { container } = render(TagPostsSection, {
      store,
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('if tagPosts is empty > will return null from featuredPostAuthor', () => {
    const wrapper = mount(TagPostsSection, {
      localVue,
      mocks,
      stubs,
      store: {
        getters: {
          blogTag: () => 'Blog tag',
          tagPostsCount: () => 5,
          tagPostsLoaded: () => true,
          allAuthors: () => [
            {
              id: '1',
            }, {
              id: '2',
            }, {
              id: '3',
            },
          ],
          tagPostsPage: () => 1,
          tagPosts: [],
        },
      },
    })
    expect(wrapper.vm.featuredPostAuthor).toBeNull()
  })

  it('if tagPosts has data > will return { id: "YG83_xAAACIA9tnb", name: "Denisoed" }', async () => {
    const initLazyLoadMock = jest.spyOn(initializeLazyLoad, 'initializeLazyLoad').mockImplementation(() => {})
    const nextTick = jest.fn(() => initLazyLoadMock())
    mocks.$nextTick = nextTick
    const wrapper = mount(TagPostsSection, {
      localVue,
      mocks,
      stubs,
      store: {
        getters: {
          blogTag: 'Blog tag',
          tagPostsCount: 5,
          tagPostsLoaded: true,
          allAuthors: [
            {
              id: 'YG83_xAAACIA9tnb',
              name: 'Denisoed',
            }, {
              id: '2',
              name: 'Baha',
            }, {
              id: '3',
              name: 'Ivan',
            },
          ],
          tagPostsPage: 1,
          tagPosts,
        },
      },
    })
    expect(wrapper.vm.featuredPostAuthor).toEqual({ id: 'YG83_xAAACIA9tnb', name: 'Denisoed' })
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick(() => {
      expect(initLazyLoadMock).toHaveBeenCalledTimes(1)
    })
  })
})

import { render, screen, fireEvent } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import AuthorPostsSection from '@/components/Blog/Main/AuthorPostsSection'
import allPosts from '../../../__mocks__/allPosts'
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
    blogAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
      },
    }),
    authorPosts: () => allPosts,
    authorPostsLoaded: () => true,
    authorPostsPage: () => 1,
  },
}

const stubs = ['PrismicImage', 'NuxtLink', 'FeaturedPost', 'PostCard']

jest.mock('@/helpers/lazyLoad', () => ({
  initializeLazyLoad: jest.fn(),
}))

describe('AuthorPostsSection component', () => {
  it('should render correctly', async () => {
    const initLazyLoadMock = jest.spyOn(initializeLazyLoad, 'initializeLazyLoad').mockImplementation(() => {})
    const nextTick = jest.fn(() => initLazyLoadMock())
    mocks.$nextTick = nextTick
    const { container, getAllByTestId } = render(AuthorPostsSection, {
      stubs,
      mocks,
      store,
    })

    const button = screen.getByTestId('test-load-more-button')
    await fireEvent.click(button)
    expect(getAllByTestId('author-posts__list-item')).toHaveLength(14)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with empty array authorPosts', async () => {
    store.getters.authorPosts = () => []
    const initLazyLoadMock = jest.spyOn(initializeLazyLoad, 'initializeLazyLoad').mockImplementation(() => {})
    const nextTick = jest.fn(() => initLazyLoadMock())
    mocks.$nextTick = nextTick

    const wrapper = mount(AuthorPostsSection, {
      mocks,
      store,
      stubs,
      localVue,
    })

    expect(wrapper.exists()).toBe(true)
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick(() => {
      expect(initLazyLoadMock).toHaveBeenCalledTimes(1)
    })
  })
})

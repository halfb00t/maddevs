import { render, screen, fireEvent } from '@testing-library/vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'
import allPosts from '../../../__mocks__/allPosts'
import * as homeContent from '../../../__mocks__/homePageContent'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'
import initializeLazyLoad from '@/helpers/lazyLoad'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const recipeMock = jest.fn()
const scroll = jest.fn()
const windowsScroll = jest.fn()
recipeMock.mockReturnValue('homePageContent')

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
}

const props = {
  allPosts,
}

const stubs = ['NuxtLink', 'PostCard', 'UITagCloud']

const actions = {
  changePostsCategory: jest.fn(),
  getMorePosts: jest.fn(),
  setDefaultArrayWithTags: jest.fn(),
  clearAllData: jest.fn(),
}

const store = new Vuex.Store({
  getters: {
    filteredPosts: () => [...allPosts, ...allPosts],
    allPosts: () => allPosts,
    activeTags: () => ['Editors pick'],
    postsPage: () => 2,
    homePageContent: () => homeContent.default,
    allAuthors: jest.fn(),
    tags: () => ['Editors pick', 'Hardware'],
  },
  actions,
})

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')
containerToRender.scrollIntoView = scroll

const link = document.createElement('a')
link.setAttribute('href', 'undefined')
link.setAttribute('data-testid', 'test-href')
containerToRender.append(link)

jest.mock('@/helpers/lazyLoad', () => ({
  initializeLazyLoad: jest.fn(),
}))

describe('AllPostsSection component', () => {
  window.scrollTo = windowsScroll
  it('is a Vue instance', () => {
    const { container } = render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      propsData: props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct render posts', () => {
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      propsData: props,
    })

    expect(screen.getAllByTestId('test-single-post')).toHaveLength(24)
  })

  it('correctly call update class function from watcher if haven\'t parent node or not found attribute', () => {
    mocks.visitedPost = 'Hardware'
    const singleLink = document.createElement('a')
    singleLink.setAttribute('href', mocks.visitedPost)
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      propsData: props,
      container: document.body.appendChild(singleLink),
    })

    wrapper.vm.$options.watch.filteredPosts()
    expect(scroll).toHaveBeenCalledTimes(0)
    expect(windowsScroll).toHaveBeenCalledTimes(0)
  })

  it('correctly call update class function from watcher', async () => {
    const initLazyLoadMock = jest.spyOn(initializeLazyLoad, 'initializeLazyLoad').mockImplementation(() => {})
    const nextTick = jest.fn(() => initLazyLoadMock())
    mocks.$nextTick = nextTick
    mocks.visitedPost = 'Hardware'
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      propsData: props,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.watch.filteredPosts()
    expect(scroll).toHaveBeenCalledTimes(1)
    expect(windowsScroll).toHaveBeenCalledTimes(1)
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick(() => {
      expect(initLazyLoadMock).toHaveBeenCalledTimes(1)
      expect(actions.setDefaultArrayWithTags).toHaveBeenCalledTimes(1)
    })
  })

  it('should correct work get more posts handler', async () => {
    const nextTick = jest.fn()
    mocks.$nextTick = nextTick
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      propsData: props,
    })

    const button = screen.getByTestId('test-load-more-button')
    await fireEvent.click(button)

    expect(actions.getMorePosts).toHaveBeenCalledTimes(1)
  })
})

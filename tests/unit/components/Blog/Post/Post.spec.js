import { render, screen, fireEvent } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Post from '@/components/Blog/Post/Post'
import blogDocument from '../../../__mocks__/blogDocument'
import recomendedPosts from '../../../__mocks__/recomendedPosts'
import blogSlices from '../../../__mocks__/blogSlices'
import allPosts from '../../../__mocks__/allPosts'
import * as homeContent from '../../../__mocks__/homePageContent'

jest.mock('~/helpers/generatorUid')

const props = {
  cluster: {},
  document: blogDocument,
  formattedDate: 'Apr 12, 2021',
  id: 'YHRrABEAACkAwDuj',
  jsonLd: '',
  openGraphUrl: 'undefined/blog/software-project-handover/',
  recommendedPosts: recomendedPosts,
  slices: blogSlices,
  tags: [
    'Project Management',
    'Featured post',
  ],
  title: 'How to Handover a Software Project to Another Team | Mad Devs Blog',
  type: 'blog_post',
  slice: {
    primary: {
      text: [
        {
          type: 'heading1',
          text: 'sample text',
        },
      ],
    },
  },
}

Object.defineProperty(document, 'execCommand', { value: jest.fn() })

Object.defineProperty(window, 'pageYOffset', {
  value: 200,
})

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  $route: {
    name: 'test-route',
    params: {
      uid: 'uid',
    },
  },
  $router: {
    currentRoute: {
      path: '/blog-post-title',
    },
  },
}

const store = {
  getters: {
    filteredPosts: () => allPosts,
    allPosts: () => allPosts,
    postsCategory: jest.fn(),
    postsPage: () => 2,
    homePageContent: () => homeContent.default,
    allAuthors: jest.fn(),
  },
  actions: {
    changePostsCategory: jest.fn(),
    getMorePosts: jest.fn(),
  },
}

const refs = { // use for offsetHeight random numbers
  blogPost: {
    offsetHeight: 8000,
  },
  navbar: {
    offsetHeight: 400,
  },
  postFooter: {
    offsetHeight: 600,
  },
}

const stubs = ['NuxtLink', 'ShareNetwork', 'PrismicRichText', 'PrismicEmbed', 'BlogHeader', 'SlicesBlock', 'PostCard']

const WINDOW_SCROLL_TO = jest.fn()

describe('Post component', () => {
  window.scrollTo = WINDOW_SCROLL_TO
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Post, {
      localVue,
      stubs,
      mocks,
      propsData: props,
      store,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render correctly with default props', () => {
    const { container } = render(Post, {
      localVue,
      stubs,
      mocks,
      store,
      propsData: props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct get the route uid', () => {
    expect(wrapper.vm.getPostUid).toBe(mocks.$route.params.uid)
  })

  it('should correct call scroll top', async () => {
    const SCROLL_Y = 100
    const { queryAllByTestId } = render(Post, {
      localVue,
      stubs,
      mocks,
      store,
      propsData: props,
    })

    expect(queryAllByTestId('test-back-list')).toHaveLength(0)
    await fireEvent.scroll(window, { target: { scrollY: SCROLL_Y, scrollingElement: { scrollTop: SCROLL_Y } } })
    expect(window.scrollY).toBe(SCROLL_Y)
    expect(queryAllByTestId('test-back-list')).toHaveLength(1)
    const element = screen.getByTestId('test-back-list')
    fireEvent.click(element)
    expect(WINDOW_SCROLL_TO).toHaveBeenCalledTimes(1)
  })

  it('setStylesForNavbar should call function handleNavbar if computed tableOfContentsSlice return slice', () => {
    wrapper = shallowMount(Post, {
      localVue,
      stubs,
      mocks,
      store,
      propsData: props,
      computed: {
        tableOfContentsSlice() {
          return {
            primary: {
              text: [
                {
                  type: 'heading1',
                  text: 'sample text',
                },
              ],
            },
          }
        },
      },
    })
    const handleNavbarSpy = jest.spyOn(wrapper.vm, 'handleNavbar').mockImplementation(() => jest.fn())

    wrapper.vm.setStylesForNavbar()

    expect(handleNavbarSpy).toHaveBeenCalledTimes(1)
  })

  it('setStylesForNavbar should not call function if computed return false', () => {
    wrapper = shallowMount(Post, {
      localVue,
      stubs,
      mocks,
      store,
      propsData: props,
      computed: {
        tableOfContentsSlice() {
          return false
        },
      },
    })
    const handleNavbarSpy = jest.spyOn(wrapper.vm, 'handleNavbar').mockImplementation(() => jest.fn())

    wrapper.vm.setStylesForNavbar()

    expect(handleNavbarSpy).toHaveBeenCalledTimes(0)
  })

  it('data instance should contains html element', () => {
    document.body.innerHTML = '<div id="introduction-container"/><div id="header-container"/>'
    const introductionContainer = document.getElementById('introduction-container')
    const headerContainer = document.getElementById('header-container')

    wrapper.vm.setStylesForNavbar()

    expect(wrapper.vm.introductionContainer).toEqual(introductionContainer)
    expect(wrapper.vm.headerContainer).toEqual(headerContainer)
  })

  it('getScrollStartPoint should return scroll start point count', () => {
    const state = { offsetHeight: 1 }
    const expectedResult = 2

    wrapper.vm.introductionContainer = state
    wrapper.vm.headerContainer = state

    const result = wrapper.vm.getScrollStartPoint()

    expect(result).toBe(expectedResult)
  })

  it('getScrollEndPoint should return scroll end point count', () => {
    const expectedResult = 6810
    wrapper.vm.$refs = refs

    const result = wrapper.vm.getScrollEndPoint()

    expect(result).toBe(expectedResult)
  })

  it('setStateForCssVar should return scroll end point count', () => {
    const state = { offsetHeight: 1 }
    const setPropertySpy = jest.spyOn(document.documentElement.style, 'setProperty').mockImplementation(() => jest.fn())

    wrapper.vm.introductionContainer = state

    wrapper.vm.setStateForCssVar()

    expect(setPropertySpy).toHaveBeenCalledWith('--top', '31px')
  })

  it('handleNavbar should call methods: getScrollStartPoint, getScrollEndPoint, setStateForCssVar', () => {
    const getScrollStartPointSpy = jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => jest.fn())
    const getScrollEndPointSpy = jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => jest.fn())
    const setStateForCssVarSpy = jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(getScrollStartPointSpy).toHaveBeenCalledTimes(1)
    expect(getScrollEndPointSpy).toHaveBeenCalledTimes(1)
    expect(setStateForCssVarSpy).toHaveBeenCalledTimes(1)
  })

  it('handleNavbar should set true for isFixed if window.pageYOffset more than scrollStartPoint', () => {
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => 100)
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isFixed).toBe(true)
  })

  it('handleNavbar should set false for isFixed if window.pageYOffset less than scrollStartPoint', () => {
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => 300)
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isFixed).toBe(false)
  })

  it('handleNavbar should set true for isBottom if window.pageYOffset more than scrollEndPoint', () => {
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => 100)
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isBottom).toBe(true)
  })

  it('handleNavbar should set false for isBottom if window.pageYOffset less than scrollEndPoint', () => {
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => 300)
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isBottom).toBe(false)
  })
})

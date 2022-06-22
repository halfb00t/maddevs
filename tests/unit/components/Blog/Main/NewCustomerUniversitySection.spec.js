import 'regenerator-runtime'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import NewCustomerUniversitySection from '@/components/Blog/Main/NewCustomerUniversitySection'
import initializeLazyLoad from '@/helpers/lazyLoad'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
  $router: {
    push: jest.fn(),
  },
}
const customerUniversitySectionPosts = {
  pricing_strategies: [
    {
      post: {
        id: 'YRarARAAACEARTec',
        uid: 'mad-devs-corporate-culture',
      },
    },
  ],
  development_process: [
    {
      post: {
        id: 'YRarARAAACEARTec',
        uid: 'mad-devs-corporate-culture',
      },
    },
  ],
}

const postsList = [
  {
    data: {
      title: [
        {
          text: '2. title',
        },
      ],
      featured_image: {
        url: 'https://example.com/image2.jpg',
        alt: 'alt text',
      },
    },
  },
  {
    data: {
      title: [
        {
          text: '1. title',
        },
      ],
      featured_image: {
        url: 'https://example.com/image.jpg',
        alt: 'alt text',
      },
    },
  },
]

const actions = {
  getCustomerUniversitySectionPosts: jest.fn(),
  getCustomerUniversityPosts: jest.fn(),
}

const getters = {
  customerUniversitySectionPosts: () => customerUniversitySectionPosts,
  CUPosts: () => postsList,
  allPosts: () => postsList,
}

const stubs = ['PrismicImage', 'NuxtLink', 'Feature']

const directives = {
  'lazy-load': () => {
  },
}

jest.mock('@/helpers/lazyLoad', () => ({
  initializeLazyLoad: jest.fn(),
}))

describe('NewCustomerUniversitySection component', () => {
  it('should render correctly with no data', async () => {
    const store = new Vuex.Store({ actions, getters })
    const initLazyLoadMock = jest.spyOn(initializeLazyLoad, 'initializeLazyLoad').mockImplementation(() => {})
    const nextTick = jest.fn(() => initLazyLoadMock())
    mocks.$nextTick = nextTick
    const wrapper = shallowMount(NewCustomerUniversitySection, {
      store,
      localVue,
      stubs,
      mocks,
      directives,
    })

    wrapper.vm.redirectTo('https://example.com')

    expect(mocks.$router.push).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.isFirstElement(0)).toBeTruthy()
    expect(wrapper.vm.calculateCardDirection(0)).toBe('column')
    expect(wrapper.vm.calculateCardDirection(1)).toBe('row')
    expect(wrapper.vm.calculateCardSize(0)).toBe('md')
    expect(wrapper.vm.calculateCardSize(1)).toBe('sm')
    expect(wrapper.vm.calculateCardWidth(0)).toBe('90')
    expect(wrapper.vm.calculateCardWidth(1)).toBe('100')
    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick(() => {
      expect(initLazyLoadMock).toHaveBeenCalledTimes(1)
    })
  })
})

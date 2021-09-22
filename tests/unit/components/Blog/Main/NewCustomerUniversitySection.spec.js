import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import NewCustomerUniversitySection from '@/components/Blog/Main/NewCustomerUniversitySection'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'img.png',
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
describe('NewCustomerUniversitySection component', () => {
  let wrapper = null

  beforeEach(() => {
    const store = new Vuex.Store({ actions, getters })
    wrapper = shallowMount(NewCustomerUniversitySection, {
      store,
      localVue,
      stubs,
      mocks,
      directives,
    })
  })
  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})

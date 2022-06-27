import { render, screen, fireEvent } from '@testing-library/vue'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import EbooksWithFilterSlice from '@/prismicSlices/pageParts/EbooksWithFilterSlice'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const recipeMock = jest.fn()
const scroll = jest.fn()
recipeMock.mockReturnValue('homePageContent')

const ebooksPages = [
  {
    title: 'Test',
    subtitle: 'Test subtitle',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link',
  }, {
    title: 'Test 2',
    subtitle: 'Test subtitle 2',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link-two',
  }, {
    title: 'Test',
    subtitle: 'Test subtitle',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link',
  }, {
    title: 'Test 2',
    subtitle: 'Test subtitle 2',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link-two',
  }, {
    title: 'Test',
    subtitle: 'Test subtitle',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link',
  }, {
    title: 'Test 2',
    subtitle: 'Test subtitle 2',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link-two',
  }, {
    title: 'Test',
    subtitle: 'Test subtitle',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link',
  }, {
    title: 'Test 2',
    subtitle: 'Test subtitle 2',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link-two',
  }, {
    title: 'Test',
    subtitle: 'Test subtitle',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link',
  }, {
    title: 'Test 2',
    subtitle: 'Test subtitle 2',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link-two',
  }, {
    title: 'Test',
    subtitle: 'Test subtitle',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link',
  }, {
    title: 'Test 2',
    subtitle: 'Test subtitle 2',
    image: {
      url: 'img.jpg',
      alt: 'test',
    },
    link: 'test-link-two',
  }]

const mocks = {
  $prismic: {
    api: {
      query: jest.fn(),
    },
    asText: text => text[0].text,
  },
}

const store = {
  getters: {
    ebooks: () => ebooksPages,
    page: () => 1,
    ebookCategory: () => 'Ebooks',
    totalPages: () => 1,
    perPage: () => 6,
    ebookCategories: () => [],
  },
  actions: {
    getEbooksAction: jest.fn(),
    changeCategory: jest.fn(),
    changePage: jest.fn(),
  },
}

const props = {
  slice: {
    items: ['Analytics'],
  },
}

const stubs = ['SkeletonBlogWidget', 'NuxtLink']

const directives = {
  'lazy-load': jest.fn(),
}

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')
containerToRender.scrollIntoView = scroll

describe('EbooksWithFilterSlice component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should correctly render component', () => {
    const { container } = render(EbooksWithFilterSlice, {
      mocks,
      store,
      stubs,
      localVue,
      props,
      directives,
    })

    expect(screen.getAllByTestId('ebooksCards')).toHaveLength(ebooksPages.length)
    expect(container).toMatchSnapshot()
  })

  it('should correct work change ebook category', async () => {
    Element.prototype.scrollIntoView = () => {}
    render(EbooksWithFilterSlice, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const input = screen.getAllByTestId('allEbooks')
    await fireEvent.update(input[0], 'Ebooks')
    expect(store.actions.changeCategory).toHaveBeenCalledTimes(1)
  })

  it('should correct work change page pagination', async () => {
    Element.prototype.scrollIntoView = () => {}
    render(EbooksWithFilterSlice, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const nextBtn = screen.getByTestId('text-next-btn')
    await fireEvent.click(nextBtn)
    expect(store.actions.getEbooksAction).toHaveBeenCalledTimes(1)
  })
})

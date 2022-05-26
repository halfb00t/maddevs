import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/ebooks'
import { getEbooks } from '@/api/ebooks'

mutations.$prismic = {
  asText: text => text[0].text,
}

const fakeData = {
  results: [{
    data: {
      body: [{
        primary: {
          title: [{
            text: 'Test',
          }],
          subtitle: [{
            text: 'Test subtitle',
          }],
          rightImage: {
            url: 'img.jpg',
            alt: 'Image',
          },
        },
      }],
    },
    uid: 'test-uid',
    tags: ['Ebooks'],
  }],
  total_pages: 1,
  results_per_page: 6,
  page: 1,
}

const formattedFakeData = {
  ebooksDefault: [
    {
      title: 'Test',
      subtitle: 'Test subtitle',
      image: {
        url: 'img.jpg',
        alt: 'Image',
      },
      link: 'test-uid',
      tags: ['Ebooks'],
    },
  ],
  ebooks: [
    {
      title: 'Test',
      subtitle: 'Test subtitle',
      image: {
        url: 'img.jpg',
        alt: 'Image',
      },
      link: 'test-uid',
      tags: ['Ebooks'],
    },
  ],
  page: 1,
  ebookCategory: 'Ebooks',
  ebookCategories: [],
  totalPages: 1,
  perPage: 6,
}

jest.mock('@/api/ebooks', () => ({
  getEbooks: jest.fn(() => ({ results: [{ tags: ['Ebooks'] }] })),
}))

describe('Ebooks module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.ebooksDefault).toEqual([])
    expect(state.ebooks)
      .toEqual([])
    expect(state.page)
      .toEqual(1)
    expect(state.ebookCategory)
      .toBe('Ebooks')
    expect(state.totalPages)
      .toBeNull()
    expect(state.perPage)
      .toBe(6)
  })
})

describe('Ebooks module mutations', () => {
  it('should correct mutate state after calling SET_EBOOKS mutation', () => {
    const state = defaultState()

    mutations.SET_EBOOKS(state, fakeData)

    expect(state).toEqual(formattedFakeData)
  })

  it('should correct mutate state after calling SET_CATEGORY mutation', () => {
    const state = defaultState()
    const ebookCategory = {
      category: formattedFakeData.ebookCategory,
      ebooks: formattedFakeData.ebooks,
      totalPages: formattedFakeData.totalPages,
    }

    mutations.SET_CATEGORY(state, ebookCategory)

    delete ebookCategory.category
    expect(state).toEqual({
      ...defaultState(),
      ...ebookCategory,
    })
  })

  it('should correct mutate state after calling SET_CATEGORIES mutation', () => {
    const state = defaultState()
    const categories = ['Ebooks']
    mutations.SET_CATEGORIES(state, categories)

    expect(state.ebookCategories).toEqual(categories)
  })

  it('should correct mutate state after calling SET_CHANGE_PAGE mutation', () => {
    const state = defaultState()
    const changedPage = {
      newEbooksPage: [{ title: 'test' }],
      page: 1,
    }
    mutations.SET_CHANGE_PAGE(state, changedPage)

    expect(state.ebooks).toEqual(changedPage.newEbooksPage)
    expect(state.page).toBe(changedPage.page)
  })
})

describe('Ebooks module actions', () => {
  it('should correctly called getEbookAction', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getEbooksAction(store)
    expect(getEbooks).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_EBOOKS', { results: [{ tags: ['Ebooks'] }] })
    expect(store.commit).toHaveBeenCalledWith('SET_CATEGORIES', [])
    jest.clearAllMocks()
  })

  it('should correctly called changeCategory', async () => {
    const state = {
      ebooksDefault: [{ tags: ['Ebooks'] }],
      totalPages: 1,
      category: 'Ebooks',
    }
    const store = {
      commit: jest.fn(),
      state: {
        ...state,
        perPage: 6,
      },
    }

    await actions.changeCategory(store, 'Ebooks')
    expect(store.commit).toHaveBeenCalledWith('SET_CATEGORY', {
      ebooks: [{ tags: ['Ebooks'] }],
      totalPages: 1,
      category: 'Ebooks',
    })
  })

  it('should correctly called changePage', async () => {
    const store = {
      commit: jest.fn(),
      state: {
        ebooksDefault: [{ tags: ['Ebooks'] }],
        ebookCategory: 'Ebooks',
        perPage: 6,
      },
    }

    await actions.changePage(store, 1)
    expect(store.commit).toHaveBeenCalledWith('SET_CHANGE_PAGE',
      {
        newEbooksPage: [{ tags: ['Ebooks'] }],
        page: 1,
      })
    jest.clearAllMocks()
  })
})

describe('Ebooks module getters', () => {
  const state = defaultState()

  it('ebooks', () => {
    expect(getters.ebooks(state)).toBe(state.ebooks)
  })

  it('ebookCategory', () => {
    expect(getters.ebookCategory(state)).toBe(state.ebookCategory)
  })

  it('ebookCategories', () => {
    expect(getters.ebookCategories(state)).toBe(state.ebookCategories)
  })

  it('totalPages', () => {
    expect(getters.totalPages(state)).toBe(state.totalPages)
  })

  it('perPage', () => {
    expect(getters.perPage(state)).toBe(state.perPage)
  })

  it('page', () => {
    expect(getters.page(state)).toBe(state.page)
  })
})

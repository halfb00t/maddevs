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
  }],
  total_pages: 1,
  results_per_page: 6,
  page: 1,
}

const formattedFakeData = {
  ebooks: [
    {
      title: 'Test',
      subtitle: 'Test subtitle',
      image: {
        url: 'img.jpg',
        alt: 'Image',
      },
      link: 'test-uid',
    },
  ],
  page: 1,
  ebookCategory: 'Ebooks',
  totalPages: 1,
  perPage: 6,
}

jest.mock('@/api/ebooks', () => ({
  getEbooks: jest.fn(() => []),
}))

describe('Ebooks module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.ebooks)
      .toEqual([])
    expect(state.page)
      .toEqual(1)
    expect(state.ebookCategory)
      .toBe('Ebooks')
    expect(state.totalPages)
      .toBeNull()
    expect(state.perPage)
      .toBeNull()
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
    const ebookCategory = 'Analytics'

    mutations.SET_CATEGORY(state, ebookCategory)

    expect(state).toEqual({
      ...defaultState(),
      ebookCategory,
    })
  })
})

describe('Ebooks module actions', () => {
  it('should correctly called getEbookAction', async () => {
    const store = {
      commit: jest.fn(),
      state: {
        ebookCategory: defaultState().ebookCategory,
      },
    }

    await actions.getEbooksAction(store, 1)
    expect(getEbooks).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_EBOOKS', [])
    jest.clearAllMocks()
  })

  it('should correctly called changeCategory', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.changeCategory(store, 'Analytics')
    expect(getEbooks).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_EBOOKS', [])
    expect(store.commit).toHaveBeenCalledWith('SET_CATEGORY', 'Analytics')
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

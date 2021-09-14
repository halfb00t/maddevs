import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/customPage'
import { getCustomPage } from '@/api/customPage'

jest.mock('@/api/customPage', () => (
  {
    getCustomPage: jest.fn(() => 'uid'),
  }
))

actions.$prismic = {
  api: jest.fn(),
}

describe('Custom page module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.customPage).toEqual({})
  })
})

describe('Custom page module mutations', () => {
  const prismicResponse = {
    id: 'id',
    uid: 'uid',
    url: 'url',
    type: 'type',
    href: 'href',
    tags: [],
    first_publication_date: '2021-08-20T10:56:45+0000',
    last_publication_date: '2021-08-31T09:29:35+0000',
    slugs: [
      'make-your-business-br--grow-with-mad-devs',
      'make-your-business-grow-with-mad-devs',
      'demo-contact-page',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      route_prefix: 'route/prefix',
      body: [],
      released: false,
      show_footer: false,
      meta_title: 'Meta title',
      meta_description: 'Meta description',
      schema_org_snippets: [],
    },
  }

  it('should correct mutate state after calling SET_CUSTOM_PAGE mutation with prismicResponse', () => {
    const state = defaultState()
    const expectedData = {
      id: 'id',
      uid: 'uid',
      routePrefix: '/route/prefix/',
      slices: [],
      released: false,
      showFooter: false,
      metaTitle: 'Meta title',
      metaDescription: 'Meta description',
      schemaOrgSnippet: '',
    }

    mutations.SET_CUSTOM_PAGE(state, prismicResponse)

    expect(state).toEqual({
      ...defaultState(),
      customPage: expectedData,
    })
  })

  it('should correct mutate state after calling SET_CUSTOM_PAGE mutation without prismicResponse', () => {
    const state = defaultState()

    mutations.SET_CUSTOM_PAGE(state)

    expect(state).toEqual({
      ...defaultState(),
      customPage: {},
    })
  })
})

describe('Custom page module actions', () => {
  it('should correctly called getCustomPage', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getCustomPage(store)

    expect(getCustomPage).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_CUSTOM_PAGE', 'uid')
  })
})

describe('Custom page module getters', () => {
  const state = defaultState()

  it('customPage', () => {
    expect(getters.customPage(state)).toBe(state.customPage)
  })
})

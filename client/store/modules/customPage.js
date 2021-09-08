/* eslint-disable no-shadow */
import { getCustomPage } from '@/api/customPage'
import extractSchemaOrg from '@/helpers/extractSchemaOrg'

const extractCustomPageData = page => {
  if (!page && !page?.data) return {}
  return {
    released: page.data.released,
    showFooter: page.data.show_footer,
    slices: page.data.body,
    metaTitle: page.data.meta_title,
    metaDescription: page.data.meta_description,
    schemaOrgSnippet: extractSchemaOrg(page.data.schema_org_snippets),
  }
}

export const state = () => ({
  customPage: {},
})

export const mutations = {
  SET_CUSTOM_PAGE(state, page) {
    state.customPage = extractCustomPageData(page)
  },
}

export const actions = {
  async getCustomPage({ commit }, payload) {
    const page = await getCustomPage(this.$prismic, payload)
    commit('SET_CUSTOM_PAGE', page)
  },
}

export const getters = {
  customPage(state) {
    return state.customPage
  },
}

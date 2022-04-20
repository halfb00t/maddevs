/* eslint-disable no-shadow */

import { getEbooks } from '@/api/ebooks'
import textEllipsis from '@/helpers/textEllipsis'

export const state = () => ({
  ebooks: [],
  page: 1,
  ebookCategory: 'Ebooks',
  totalPages: null,
  perPage: null,
})

export const mutations = {
  SET_EBOOKS(state, data) {
    state.ebooks = data.results.map(ebook => ({
      title: textEllipsis(this.$prismic.asText(ebook.data.body[0].primary.title), {
        limit: 42,
        trimToSpace: false,
      }),
      subtitle: textEllipsis(this.$prismic.asText(ebook.data.body[0].primary.subtitle), {
        limit: 80,
        trimToSpace: false,
      }),
      image: ebook.data.body[0].primary.rightImage,
      link: ebook.uid,
    }))
    state.totalPages = data.total_pages
    state.perPage = data.results_per_page
    state.page = data.page
  },
  SET_CATEGORY(state, category) {
    state.ebookCategory = category
  },
}

export const actions = {
  async getEbooksAction({ commit, state }, page) {
    const ebooks = await getEbooks(this.$prismic, state.ebookCategory, page)
    commit('SET_EBOOKS', ebooks)
  },
  async changeCategory({ commit }, category) {
    const ebooks = await getEbooks(this.$prismic, category)
    commit('SET_EBOOKS', ebooks)
    commit('SET_CATEGORY', category)
  },
}

export const getters = {
  ebooks(state) {
    return state.ebooks
  },
  ebookCategory(state) {
    return state.ebookCategory
  },
  totalPages(state) {
    return state.totalPages
  },
  perPage(state) {
    return state.perPage
  },
  page(state) {
    return state.page
  },
}

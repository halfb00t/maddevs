/* eslint-disable no-shadow */

import { getEbooks } from '@/api/ebooks'
import textEllipsis from '@/helpers/textEllipsis'

export const state = () => ({
  ebooksDefault: [],
  ebooks: [],
  page: 1,
  ebookCategory: 'Ebooks',
  ebookCategories: [],
  totalPages: null,
  perPage: 6,
})

export const mutations = {
  SET_EBOOKS(state, data) {
    state.ebooksDefault = data.results.map(ebook => ({
      title: this.$prismic.asText(ebook.data.body[0].primary.title),
      subtitle: textEllipsis(this.$prismic.asText(ebook.data.body[0].primary.subtitle), {
        limit: 80,
        trimToSpace: false,
      }),
      image: ebook.data.body[0].primary.rightImage,
      link: ebook.uid,
      tags: ebook.tags,
    }))
    state.ebooks = state.ebooksDefault.slice((data.page - 1) * state.perPage, data.page * state.perPage)
    state.totalPages = Math.ceil(state.ebooksDefault.length / state.perPage)
    state.page = data.page
    state.ebookCategory = 'Ebooks'
  },
  SET_CATEGORY(state, changedCategory) {
    state.ebookCategory = changedCategory.category
    state.page = 1
    state.ebooks = changedCategory.ebooks
    state.totalPages = changedCategory.totalPages
  },
  SET_CATEGORIES(state, categories) {
    state.ebookCategories = categories
  },
  SET_CHANGE_PAGE(state, changedPage) {
    state.ebooks = changedPage.newEbooksPage
    state.page = changedPage.page
  },
}

export const actions = {
  async getEbooksAction({ commit }) {
    const ebooks = await getEbooks(this.$prismic)
    const categories = [...new Set(ebooks.results.map(ebook => ebook.tags).flat().filter(tag => tag !== 'Ebooks'))]
    commit('SET_EBOOKS', ebooks)
    commit('SET_CATEGORIES', categories)
  },
  async changeCategory({ commit, state }, category) {
    const ebooks = state.ebooksDefault.filter(ebook => ebook.tags.includes(category))
    const changedCategory = {
      ebooks: ebooks.slice(0, 6),
      category,
      totalPages: Math.ceil(ebooks.length / state.perPage),
    }
    commit('SET_CATEGORY', changedCategory)
  },
  changePage({ commit, state }, page) {
    const newEbooksPage = state.ebooksDefault
      .filter(ebook => ebook.tags.includes(state.ebookCategory))
      .slice((page - 1) * state.perPage, page * state.perPage)
    commit('SET_CHANGE_PAGE', { newEbooksPage, page })
  },
}

export const getters = {
  ebooks(state) {
    return state.ebooks
  },
  ebookCategory(state) {
    return state.ebookCategory
  },
  ebookCategories(state) {
    return state.ebookCategories
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

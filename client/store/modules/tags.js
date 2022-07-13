/* eslint-disable no-shadow */

import { getTags } from '@/api/tags'

export const state = () => ({
  tags: [],
  activeTags: [],
  postsPage: 1,
  filteredArrayByTags: [],
  defaultArrayWithTags: [],
})

export const mutations = {
  SET_TAGS(state, data) {
    let tags = []
    if (data.length && data[0].data.tags && data[0].data.tags.length) {
      tags = data[0].data.tags.map(tag => ({
        tagName: tag.tag_name === 'Software Development' ? 'Software Development ' : tag.tag_name,
      }))
    }

    state.tags = tags
  },

  SET_POSTS_CATEGORY(state, category) {
    state.activeTags = [...state.activeTags, category]
  },

  DELETE_POSTS_CATEGORY(state, category) {
    state.activeTags = [...state.activeTags.filter(tag => tag !== category)]
  },

  SET_POSTS_PAGE(state, page) {
    state.postsPage = page
  },

  SET_DEFAULT_ARRAY(state, array) {
    state.defaultArrayWithTags = array
  },

  CLEAR_ALL_DATA(state) {
    state.activeTags = []
    state.postsPage = 1
    state.filteredArrayByTags = []
    state.defaultArrayWithTags = []
  },
}

export const actions = {
  async getTagsFromPrismic({ commit, state }) {
    if (!state.tags.length) {
      const tags = await getTags(this.$prismic)
      commit('SET_TAGS', tags)
    }
  },

  setDefaultArrayWithTags({ commit }, array) {
    commit('SET_DEFAULT_ARRAY', array)
  },

  changeActiveTags({ commit }, filter) {
    commit('SET_POSTS_PAGE', 1)
    commit('SET_POSTS_CATEGORY', filter)
  },

  deleteActiveTag({ commit }, tag) {
    commit('SET_POSTS_PAGE', 1)
    commit('DELETE_POSTS_CATEGORY', tag)
  },

  getMorePosts({ commit, state }) {
    commit('SET_POSTS_PAGE', state.postsPage + 1)
  },

  clearAllData({ commit }) {
    commit('CLEAR_ALL_DATA')
  },
}

export const getters = {
  filteredPosts(state) {
    if (state.activeTags.length && state.tags && state.defaultArrayWithTags.length) {
      return state.defaultArrayWithTags.filter(item => item.tags.some(tag => state.activeTags.includes(tag)))
    }
    return state.defaultArrayWithTags
  },
  tags(state) {
    return state.tags
  },
  activeTags(state) {
    return state.activeTags
  },
  postsPage(state) {
    return state.postsPage
  },
}

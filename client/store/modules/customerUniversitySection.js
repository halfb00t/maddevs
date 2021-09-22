/* eslint-disable no-shadow */
import { getCustomerUniversitySectionPosts } from '@/api/blog'

export const state = () => ({
  customerUniversityPosts: [],
  isCustomerUniversityPostsLoaded: false,
  customerUniversityPostsError: null,
})

export const mutations = {
  SET_CUSTOMER_UNIVERSITY_POSTS(state, data) {
    state.customerUniversityPosts = data
  },
  SET_CUSTOMER_UNIVERSITY_POSTS_LOADED(state, value) {
    state.isCustomerUniversityPostsLoaded = value
  },
  SET_CUSTOMER_UNIVERSITY_POSTS_ERROR(state, error) {
    state.customerUniversityPostsError = error
  },
}

export const actions = {
  async getCustomerUniversitySectionPosts({ commit }) {
    commit('SET_CUSTOMER_UNIVERSITY_POSTS_LOADED', true)
    try {
      const posts = await getCustomerUniversitySectionPosts(this.$prismic)
      commit('SET_CUSTOMER_UNIVERSITY_POSTS', posts)
    } catch (error) {
      commit('SET_CUSTOMER_UNIVERSITY_POSTS_ERROR', error)
    } finally {
      commit('SET_CUSTOMER_UNIVERSITY_POSTS_LOADED', false)
    }
  },
}

export const getters = {
  customerUniversitySectionPosts(state) {
    return state.customerUniversityPosts
  },
  customerUniversitySectionPostsLoaded(state) {
    return state.isCustomerUniversityPostsLoaded
  },
  customerUniversitySectionPostsError(state) {
    return state.customerUniversityPostsError
  },
}

/* eslint-disable no-shadow */
import { getAllAuthors, getAllPostsAuthors } from '@/api/authorsPage'
import { setAuthorsPostsData } from '@/store/modules/helpers/setAuthorsPostsData'

export const state = () => ({
  authorsWithPostsData: [],
})

export const mutations = {
  SET_ALL_AUTHORS_WITH_POSTS_COUNT(state, authors) {
    state.authorsWithPostsData = authors
  },
}

export const actions = {
  async getAuthorsWithPosts({ commit }) {
    const authors = await getAllAuthors(this.$prismic)
    const posts = await getAllPostsAuthors(this.$prismic)
    const authorsWithPostsData = setAuthorsPostsData(authors, posts)
    commit('SET_ALL_AUTHORS_WITH_POSTS_COUNT', authorsWithPostsData)
  },
}

export const getters = {
  authorsWithPostsData(state) {
    return state.authorsWithPostsData
  },
}

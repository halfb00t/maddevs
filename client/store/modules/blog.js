/* eslint-disable no-shadow */

import formatDate from '@/helpers/formatDate'

import {
  getHomePageContent,
  getBlogPosts,
  getCustomerUniversityMaster,
  getCustomerUniversityFeaturedPost,
  getCUPosts,
} from '@/api/blog'

export const state = () => ({
  homePageContent: {},
  customerContent: {},
  featuredCUPost: null,
  posts: [],
  CUPosts: [],
  featuredPost: null,
  postsLoaded: false,
  showContentLocker: true,
})

export const mutations = {
  SET_BLOG_PAGE_CONTENT(state, data) {
    state.homePageContent = {
      image: data.image.url,
      headline: data.headline[0].text,
      description: data.description[0].text,
      banner: data.recent_posts_banner,
      bannerLink: data.banner_link,
    }
  },
  SET_CUSTOMER_CONTENT(state, data) {
    state.customerContent = data
  },
  SET_CU_POSTS(state, posts) {
    state.CUPosts = posts
  },
  SET_FEATURED_CUSTOMER_POST(state, post) {
    state.featuredCUPost = post
    state.featuredCUPost.date = formatDate(post.date)
  },
  SET_POSTS(state, data) {
    state.posts = data
    state.featuredPost = data && data.find(post => post.tags.includes('Featured post'))
  },
  SET_POSTS_LOADED(state, value) {
    state.postsLoaded = value
  },
  SET_SHOW_CONTENT_LOCKER(state, value) {
    state.showContentLocker = value
  },
}

export const actions = {
  async getHomePageContent({ commit }) {
    const pageContent = await getHomePageContent(this.$prismic)
    commit('SET_BLOG_PAGE_CONTENT', pageContent)
  },
  async getBlogPosts({ commit }) {
    const posts = await getBlogPosts(this.$prismic)
    commit('SET_POSTS', posts)
    commit('SET_POSTS_LOADED', true)
  },
  async getCustomerUniversityContent({ commit }) {
    const master = await getCustomerUniversityMaster(this.$prismic)
    commit('SET_CUSTOMER_CONTENT', master)
    if (master.featured_cu.uid) {
      const featuredPost = await getCustomerUniversityFeaturedPost(this.$prismic, master)
      commit('SET_FEATURED_CUSTOMER_POST', featuredPost)
    }
  },
  async getCustomerUniversityPosts({ commit }) {
    const posts = await getCUPosts(this.$prismic)
    commit('SET_CU_POSTS', posts)
  },
  changeContentLockerDisplay({ commit }, value) {
    commit('SET_SHOW_CONTENT_LOCKER', value)
  },
}

export const getters = {
  homePageContent(state) {
    return state.homePageContent
  },
  customerContent(state) {
    return state.customerContent
  },
  featuredCUPost(state) {
    return state.featuredCUPost
  },
  allPosts(state) {
    return state.posts
  },
  CUPosts(state) {
    return state.CUPosts
  },
  recentPosts(state) {
    const posts = state.posts.slice(0, 5)
    if (posts.length) {
      posts.splice(4, 0, {
        id: 'banner',
        banner: state.homePageContent.banner || { url: '#' },
        link: state.homePageContent.bannerLink || { link_type: 'Web', target: '_self', url: '#' },
      })
    }
    return posts
  },
  featuredPost(state) {
    return state.featuredPost
  },
  postsLoaded(state) {
    return state.postsLoaded
  },
  showContentLocker(state) {
    return state.showContentLocker
  },
}

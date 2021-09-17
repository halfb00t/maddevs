/* eslint-disable no-shadow */

// Api functions
import { getHeaderContent } from '@/api/header'
import { getBlogPost } from '@/api/blogPost'
import { getBlogAuthor } from '@/api/blogAuthors'

// Helper functions
import extractPostData from '@/helpers/extractPostData'
import extractAuthorData from '@/helpers/extractAuthorData'

const extractHeaderSection = async (prismic, headerContent = {}, navSection) => {
  let menus = []

  // Get blog post data for header sections
  const { type: postType, uid: postUID } = headerContent[`${navSection}_blog_post`]
  const post = await getBlogPost(prismic, { type: postType, uid: postUID })
  const author = await getBlogAuthor(prismic, post?.data?.post_author?.uid)

  menus = headerContent.body
    .filter(slice => slice.primary?.nav_section.toLowerCase() === navSection)
    .map(slice => ({
      name: slice.primary?.name,
      routes: slice.items,
    }))

  return {
    name: navSection,
    menus,
    post: extractPostData(post),
    postAuthor: extractAuthorData(author),
  }
}

export const state = () => ({
  headerContent: {},
  headerTransparent: false,
  headerTransparentArea: null,
})

export const mutations = {
  SET_HEADER_CONTENT(state, headerContent) {
    state.headerContent = headerContent
  },
  SET_HEADER_TRANSPARENT(state, data) {
    state.headerTransparent = data
  },
  SET_HEADER_TRANSPARENT_AREA(state, area) {
    state.headerTransparentArea = area
  },
}

export const actions = {
  async getHeaderContent({ commit }) {
    const headerContent = await getHeaderContent(this.$prismic)
    const company = await extractHeaderSection(this.$prismic, headerContent, 'company')
    const services = await extractHeaderSection(this.$prismic, headerContent, 'services')
    const industries = await extractHeaderSection(this.$prismic, headerContent, 'industries')
    const clients = await extractHeaderSection(this.$prismic, headerContent, 'clients')
    const insights = await extractHeaderSection(this.$prismic, headerContent, 'insights')

    commit('SET_HEADER_CONTENT', {
      company,
      services,
      industries,
      clients,
      insights,
    })
  },
  setHeaderTransparent({ commit }, data) {
    commit('SET_HEADER_TRANSPARENT', data)
  },
  setHeaderTransparentArea({ commit }, area) {
    commit('SET_HEADER_TRANSPARENT_AREA', area)
  },
}

export const getters = {
  headerContent(state) {
    return state.headerContent
  },
  headerTransparentArea(state) {
    return state.headerTransparentArea
  },
  headerTransparent(state) {
    return state.headerTransparent
  },
}

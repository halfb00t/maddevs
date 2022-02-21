/* eslint-disable no-shadow */

// Api functions
import { getHeaderContent } from '@/api/header'

// Helper functions
import extractPostData from '@/helpers/extractPostData'
import extractAuthorData from '@/helpers/extractAuthorData'

const extractHeaderSection = async (prismic, headerContent = {}, navSection) => {
  let menus = []

  // Get blog post data for header sections
  const sectionPost = headerContent[`${navSection}_blog_post`]
  const post = sectionPost
  const author = sectionPost.data.post_author
  const getLink = () => {
    const link = headerContent.body
      .find(item => item.primary?.nav_section.toLowerCase() === navSection)
    return link?.primary?.link[0]?.text
  }

  menus = headerContent.body
    .filter(slice => slice.primary?.nav_section.toLowerCase() === navSection)
    .map(slice => ({
      name: slice.primary?.name,
      routes: slice.items,
    }))

  return {
    name: navSection,
    link: getLink(),
    menus,
    post: extractPostData(post),
    postAuthor: extractAuthorData(author),
  }
}

export const state = () => ({
  headerContent: {},
  headerTransparent: true,
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
    // const industries = await extractHeaderSection(this.$prismic, headerContent, 'industries')
    const clients = await extractHeaderSection(this.$prismic, headerContent, 'clients')
    const insights = await extractHeaderSection(this.$prismic, headerContent, 'insights')

    commit('SET_HEADER_CONTENT', {
      company,
      services,
      // industries,
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

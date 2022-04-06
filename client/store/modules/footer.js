/* eslint-disable no-shadow */
import { getFooterContent } from '@/api/footer'

const extractFooterSection = async (prismic, footerContent = {}, navSection) => {
  // Get blog post data for Footer sections
  const getLink = () => {
    const link = footerContent.body
      .find(item => item.primary?.nav_section.toLowerCase() === navSection)
    return link?.primary?.link[0]?.text
  }

  const menus = footerContent.body
    .filter(slice => slice.primary?.nav_section.toLowerCase() === navSection)
    .map(slice => ({
      name: slice.primary?.name,
      routes: slice.items,
    }))

  return {
    name: navSection,
    link: getLink(),
    menus,
  }
}

export const state = () => ({
  footerMainNavigation: {},
  footerContacts: {},
  footerIsLoaded: false,
  showFooter: true,
})

export const mutations = {
  SET_FOOTER_MAIN_NAVIGATION(state, footerContent) {
    state.footerMainNavigation = footerContent
  },
  SET_FOOTER_CONTACTS(state, footerContent) {
    state.footerContacts = footerContent
  },
  SET_FOOTER_STATUS(state) {
    state.footerIsLoaded = true
  },
  SHOW_FOOTER(state, data) {
    state.showFooter = data
  },
}

export const actions = {
  async getFooterContent({ commit }) {
    const footerContent = await getFooterContent(this.$prismic)
    const company = await extractFooterSection(this.$prismic, footerContent, 'company')
    const services = await extractFooterSection(this.$prismic, footerContent, 'services')
    const industries = await extractFooterSection(this.$prismic, footerContent, 'industries')
    const clients = await extractFooterSection(this.$prismic, footerContent, 'clients')
    const insights = await extractFooterSection(this.$prismic, footerContent, 'insights')
    const contacts = {
      email: footerContent.email,
      emailTitle: footerContent.emailTitle,
      phoneNumber: footerContent.phoneNumber,
      phoneNumberTitle: footerContent.phoneNumberTitle,
    }

    commit('SET_FOOTER_MAIN_NAVIGATION', {
      company,
      services,
      industries,
      clients,
      insights,
    })

    commit('SET_FOOTER_CONTACTS', {
      ...contacts,
    })

    commit('SET_FOOTER_STATUS')
  },
  // setFooterContacts({ commit }, contacts) {
  //   commit('SET_FOOTER_CONTACTS', contacts)
  // }, todo delete this
  showFooter({ commit }, data) {
    commit('SHOW_FOOTER', data)
  },
}

export const getters = {
  footerContacts(state) {
    return state.footerContacts
  },
  footerMainNavigation(state) {
    return state.footerMainNavigation
  },
  footerIsLoaded(state) {
    return state.footerIsLoaded
  },
  showFooter(state) {
    return state.showFooter
  },
}

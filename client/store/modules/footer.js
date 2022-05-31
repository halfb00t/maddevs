/* eslint-disable no-shadow */
import { getFooterContent } from '@/api/footer'
import { extractFooterNavigation } from '@/store/modules/helpers/extractFooterSectionData'

export const state = () => ({
  footerMainNavigation: {},
  footerContacts: {},
  showFooter: true,
})

export const mutations = {
  SET_FOOTER_MAIN_NAVIGATION(state, footerContent) {
    state.footerMainNavigation = footerContent
  },
  SET_FOOTER_CONTACTS(state, footerContent) {
    state.footerContacts = footerContent
  },
  SHOW_FOOTER(state, data) {
    state.showFooter = data
  },
}

export const actions = {
  async getFooterContent({ commit }) {
    const footerContent = await getFooterContent(this.$prismic)
    const navigationsDepartments = ['company', 'services', 'clients', 'insights', 'industries']
    const footerNavigationData = extractFooterNavigation(this.$prismic, footerContent, navigationsDepartments)
    const contacts = {
      email: footerContent.email,
      emailTitle: footerContent.emailTitle,
      phoneNumber: footerContent.phoneNumber,
      phoneNumberTitle: footerContent.phoneNumberTitle,
    }
    commit('SET_FOOTER_MAIN_NAVIGATION', footerNavigationData)
    commit('SET_FOOTER_CONTACTS', {
      ...contacts,
    })
  },

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
  showFooter(state) {
    return state.showFooter
  },
}

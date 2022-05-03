/* eslint-disable no-shadow */

export const state = () => ({
  isFilledLeadForm: false,
})

export const mutations = {
  SET_FILLED_LEAD_FORM(state) {
    state.isFilledLeadForm = true
  },
  SET_UNFILLED_LEAD_FORM(state) {
    state.isFilledLeadForm = false
  },
}

export const actions = {
  setFilledLeadForm({ commit }) {
    commit('SET_FILLED_LEAD_FORM')
  },
  setUnfilledLeadForm({ commit }) {
    commit('SET_UNFILLED_LEAD_FORM')
  },
}

export const getters = {
  isFilledLeadForm(state) {
    return state.isFilledLeadForm
  },
}

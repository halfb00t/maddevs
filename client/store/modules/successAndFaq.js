/* eslint-disable no-shadow */

export const state = () => ({
  isFilledLeadForm: false,
})

export const mutations = {
  SET_FILLED_LEAD_FORM(state) {
    state.isFilledLeadForm = true
  },
  SET_DEFAULT_VALUE(state) {
    state.isFilledLeadForm = false
  },
}

export const actions = {
  setFilledLeadForm({ commit }) {
    commit('SET_FILLED_LEAD_FORM')
  },
  setDefaultValue({ commit }) {
    commit('SET_DEFAULT_VALUE')
  },
}

export const getters = {
  isFilledLeadForm(state) {
    return state.isFilledLeadForm
  },
}

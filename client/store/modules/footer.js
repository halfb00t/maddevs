/* eslint-disable no-shadow */
export const state = () => ({
  showFooter: true,
})

export const mutations = {
  SHOW_FOOTER(state, data) {
    state.showFooter = data
  },
}

export const actions = {
  showFooter({ commit }, data) {
    commit('SHOW_FOOTER', data)
  },
}

export const getters = {
  showFooter(state) {
    return state.showFooter
  },
}

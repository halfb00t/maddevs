/* eslint-disable no-shadow */
export const state = () => ({
  headerTransparent: false,
  headerTransparentArea: null,
})

export const mutations = {
  SET_HEADER_TRANSPARENT(state, data) {
    state.headerTransparent = data
  },
  SET_HEADER_TRANSPARENT_AREA(state, area) {
    state.headerTransparentArea = area
  },
}

export const actions = {
  setHeaderTransparent({ commit }, data) {
    commit('SET_HEADER_TRANSPARENT', data)
  },
  setHeaderTransparentArea({ commit }, area) {
    commit('SET_HEADER_TRANSPARENT_AREA', area)
  },
}

export const getters = {
  headerTransparentArea(state) {
    return state.headerTransparentArea
  },
  headerTransparent(state) {
    return state.headerTransparent
  },
}

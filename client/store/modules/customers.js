/* eslint-disable no-shadow */
import { getAllCustomers } from '@/api/customersService'

export const state = () => ({
  customers: [],
})

export const mutations = {
  SET_CUSTOMERS(state, customers) {
    state.customers = customers
  },
}

export const actions = {
  async getCustomers({ commit }) {
    const customers = await getAllCustomers(this.$prismic)
    commit('SET_CUSTOMERS', customers)
  },
}

export const getters = {
  sortedCursomersByPriority(state) {
    console.log(state.customers)
    return state.customers
  },
}

import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/successAndFaq'

describe('Success and FAQ module state', () => {
  it('should correct return default state', () => {
    const state = defaultState()
    expect(state.isFilledLeadForm).toBeFalsy()
  })
})

describe('Success and FAQ module mutations', () => {
  it('should correct mutate state after calling SET_FILLED_LEAD_FORM', () => {
    const state = defaultState()
    mutations.SET_FILLED_LEAD_FORM(state)

    expect(state.isFilledLeadForm).toBeTruthy()
  })

  it('should correct mutate state after calling SET_UNFILLED_LEAD_FORM', () => {
    const state = defaultState()
    mutations.SET_UNFILLED_LEAD_FORM(state)
    expect(state.isFilledLeadForm).toBeFalsy()
  })
})

describe('Success and FAQ module actions', () => {
  it('should correctly called setFilledLeadForm', () => {
    const store = {
      commit: jest.fn(),
    }

    actions.setFilledLeadForm(store)
    expect(store.commit).toHaveBeenCalledWith('SET_FILLED_LEAD_FORM')
  })

  it('should correctly called setUnfilledLeadForm', () => {
    const store = {
      commit: jest.fn(),
    }

    actions.setUnfilledLeadForm(store)
    expect(store.commit).toHaveBeenCalledWith('SET_UNFILLED_LEAD_FORM')
  })
})

describe('Success and FAQ module getters', () => {
  const state = defaultState()

  it('isFilledLeadForm', () => {
    expect(getters.isFilledLeadForm(state)).toBeFalsy()
  })
})

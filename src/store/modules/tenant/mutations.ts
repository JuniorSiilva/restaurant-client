import { MutationTypes } from '../../mutation-types'
import { State, Mutations } from './types'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_CUSTOMER](state, customer: string) {
    state.customer = customer

    localStorage.setItem('customer', customer)
  },

  [MutationTypes.REMOVE_CUSTOMER](state) {
    state.customer = null

    localStorage.removeItem('customer')
  },
}

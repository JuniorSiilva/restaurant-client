import { MutationTypes } from '../../mutation-types'
import { State, Mutations } from './types'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TOKEN](state, token: string) {
    state.token = token

    localStorage.setItem('token', token)
  },

  [MutationTypes.REMOVE_TOKEN](state) {
    state.token = null

    localStorage.removeItem('token')
  },
}

import { ActionTypes } from '../../action-types'
import { MutationTypes } from '../../mutation-types'
import { ActionTree } from 'vuex'
import { State, Actions, Credential } from './types'
import { AuthService } from '@/services/AuthService'

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN]({ commit }, credentials: Credential) {
    try {
      const { data } = await AuthService.login(credentials)

      commit(MutationTypes.SET_TOKEN, data.token)

      return true
    } catch (e) {
      commit(MutationTypes.REMOVE_TOKEN, undefined)
      throw e
    }
  },

  async [ActionTypes.LOGOUT]({ commit }) {
    try {
      await AuthService.logout()
    } finally {
      commit(MutationTypes.REMOVE_TOKEN, undefined)
    }

    return true
  },
}

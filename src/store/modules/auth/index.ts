import { Module } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { State } from './types'

const namespaced = true

const auth: Module<State, any> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
}

export default auth

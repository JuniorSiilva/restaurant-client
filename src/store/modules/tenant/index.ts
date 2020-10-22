import { Module } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { State } from './types'

const namespaced = true

const tenant: Module<State, any> = {
  namespaced,
  state,
  getters,
  mutations,
}

export default tenant

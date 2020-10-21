import { Module } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { State } from './types'

const namespaced = true

const tenant: Module<State, any> = {
  namespaced,
  state,
  getters,
}

export default tenant

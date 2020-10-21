import { GetterTree } from 'vuex'
import { Getters, State } from './types'

const getters: GetterTree<State, State> & Getters = {
  token: state => state.token,
  bearerToken: state => (state.token ? 'Bearer ' + state.token : null),
  isSigned: state => !!state.token,
}

export { getters }

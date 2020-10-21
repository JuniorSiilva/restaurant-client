import { GetterTree } from 'vuex'
import { Getters, State } from './types'

const getters: GetterTree<State, State> & Getters = {
  customer: state => state.customer,

  customerUrl: state => {
    const url = process.env.VUE_APP_API_URL as string

    if (!state.customer) return url

    return url.replace('http://', `http://${state.customer}.`)
  },
}

export { getters }

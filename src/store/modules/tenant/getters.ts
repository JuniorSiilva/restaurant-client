import { GetterTree } from 'vuex'
import { Getters, State } from './types'
import _ from 'lodash'

const getters: GetterTree<State, State> & Getters = {
  customer: state => state.customer,

  name: state => {
    if (!state.customer) return ''

    return _.startCase(state.customer.replace('-', ' '))
  },

  url: state => {
    const url = process.env.VUE_APP_API_URL as string

    if (!state.customer) return url

    return url.replace('http://', `http://${state.customer}.`)
  },
}

export { getters }

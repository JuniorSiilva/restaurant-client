import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import tenant from './modules/tenant'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    tenant,
  },
})

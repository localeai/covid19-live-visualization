import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ...modules
  },
  state: {
    // global state
  },
  actions: {
    clearAll ({ commit }) {
      // resetting state of the modules
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/RESET`)
      })
    }
  },
  mutations: {

  },
  strict: debug,
  // plugins: debug ? [createLogger()] : [] // set logger only for development
})
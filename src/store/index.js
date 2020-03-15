import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  // plugins: debug ? [createLogger()] : [] // set logger only for development
  modules: {
    ...modules
  },
  // global state
  state: {
    // Visibility of layers and Visualizations toggle button
    controls: {
      isLayersVisible: false,
      isVisualizationsVisible: false
    }
  },
  actions: {
    clearAll({ commit }) {
      // resetting state of the modules
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/RESET`);
      });
    }
  },
});

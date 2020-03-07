// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as WebFont from "webfontloader";
import "@/styles/global.scss"

// Load material icons
WebFont.load({
  google: {
    families: ["Material Icons", "Inter"],
  },
  timeout: 10000, // 10 seconds of timout
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
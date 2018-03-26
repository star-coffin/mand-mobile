// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { setScale } from './assets/js/util'

Vue.config.productionTip = false

if ($(window).width() > 750) {
  setScale(0.5)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})

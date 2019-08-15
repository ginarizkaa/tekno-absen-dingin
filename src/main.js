import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routes from './router/routes'

import VueLocalStorage from 'vue-localstorage'

import './quasar'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routes from './router/routes'

import VueLocalStorage from 'vue-localstorage'

import './quasar'

import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueGeolocation);

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})

const router = new VueRouter({routes});

import moment from 'moment'
  
Vue.config.productionTip = false
Vue.filter('formatJam', function(value) {
  if (value) {
    return moment(String(value)).format('hh:mm')
  }
});

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY')
  }
});
  

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

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
    return moment(String(value)).format('HH:mm')
  }
});

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY')
  }
});

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
  

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

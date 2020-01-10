import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import vuex from 'vuex'
import {store} from '@/store'
import router from '@/router'
import VueCharts from 'vue-chartjs'
import {Bar, Line} from 'vue-chartjs'
import * as VueGoogleMaps from "vue2-google-maps"; 

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQUGMpEpy0pdhR2VrfiPW_P0mQGmhj-pY",
    libraries: "places" // necessary for places input
  }
})
new Vue({
  vuetify,
  router,
  axios,
  vuex,
  store,
  VueCharts,
  Bar,Line,
  VueGoogleMaps,
  render: h => h(App)
}).$mount('#app')

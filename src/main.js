import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import css_Normalize from '../src/css3/css_Normalize.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps,{
  load : {
    key : "AIzaSyDa-CgDDNOkE3xBgSIzXH2wSUPR1zu0Fio",
    libraries : 'places',
  },
})
new Vue({
  router,
  store,
  vuetify,
  css_Normalize,
  render: h => h(App)
}).$mount('#app')

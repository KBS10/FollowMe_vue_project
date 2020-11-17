import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import css_Normalize from '../src/css3/css_Normalize.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VSwitch from 'v-switch-case'
// import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

// Vue.use(VueSocketIO,{
//   debug: true,
//   connection : 'http://metinseylan.com:1992',
//   vuex:{
//     store,
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_'
//   },
//   options: {path: "/mp-app/"}
// });
Vue.use(VSwitch)
Vue.use(VueGoogleMaps,{
  load: {
    key: "AIzaSyDa-CgDDNOkE3xBgSIzXH2wSUPR1zu0Fio",
  }
});
new Vue({
  router,
  store,
  vuetify,
  css_Normalize,
  render: h => h(App)
}).$mount('#app')

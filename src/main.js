import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import css_Normalize from '../src/css3/css_Normalize.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VSwitch from 'v-switch-case'
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client'

Vue.config.productionTip = false

const options = { path: "/my-app/" } //Optional options
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://192.168.43.212:5000', options),
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))
// const  SocketInstance= socketio('http://192.168.43.212:5000/');
// Vue.use(VueSocketIO, SocketInstance)


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

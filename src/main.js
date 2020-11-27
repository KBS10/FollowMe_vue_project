import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import css_Normalize from '../src/css3/css_Normalize.css'
import VSwitch from 'v-switch-case'


Vue.use(VSwitch)

new Vue({
  router,
  store,
  vuetify,
  css_Normalize,
  render: h => h(App)
}).$mount('#app')


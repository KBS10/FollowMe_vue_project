import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../components/Intro.vue'

Vue.use(VueRouter)

const Admin = () => {return import(/* webpackChunkName: "about" */ '../components/Admin.vue')}
const Medical = () => {return import(/* webpackChunkName: "about" */ '../components/Medical.vue')}
const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Medical',
    name: 'Medical',
    component : Medical
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

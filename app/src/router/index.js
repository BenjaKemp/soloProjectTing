import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/soundcloud',
    name: 'Soundcloud',
    component: () => import( /* webpackChunkName: "about" */ '../components/soundcloud/Soundcloud')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import( /* webpackChunkName: "about" */ '../components/settings/Settings')
  }
]

const router = new VueRouter({
  routes
})

export default router

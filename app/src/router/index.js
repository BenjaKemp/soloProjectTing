import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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

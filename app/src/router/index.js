import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App
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
  },
  {
    path: '/photos',
    name: 'photos',
    component: () => import( /* webpackChunkName: "about" */ '../components/photo/Photos')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( /* webpackChunkName: "about" */ '../components/dashboard/Dashboard')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import( /* webpackChunkName: "about" */ '../components/blog/Blog')
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import( /* webpackChunkName: "about" */ '../components/cv/CV')
  },
  {
    path: '/players',
    name: 'players',
    component: () => import( /* webpackChunkName: "about" */ '../components/players/Player')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/dashboard/Dashboard.vue')
  },
  {
    path: '/soundcloud',
    name: 'Soundcloud',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/soundcloud/Soundcloud.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/settings/Settings.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/photo/Photos.vue')
  },

  {
    path: '/blog',
    name: 'blog',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/blog/Blog.vue')
  },
  {
    path: '/cv',
    name: 'cv',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/cv/CV.vue')
  },
  {
    path: '/players',
    name: 'players',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/players/Player.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/chat/Chat.vue')
  },
  {
    path: '/toolkit',
    name: 'toolkit',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/toolkit/ToolKit.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/users/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/users/Login.vue')
  }
]
const router = new VueRouter({
  routes
})

export default router
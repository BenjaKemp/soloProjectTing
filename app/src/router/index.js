import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/soundcloud',
    name: 'Soundcloud',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/soundcloud/Soundcloud')
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/settings/Settings')
  },
  {
    path: '/photos',
    name: 'photos',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/photo/Photos')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/dashboard/Dashboard')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/blog/Blog')
  },
  {
    path: '/cv',
    name: 'cv',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/cv/CV')
  },
  {
    path: '/players',
    name: 'players',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../components/players/Player')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to.matched inside requires auth', to.matched)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('this is before the route')
    
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({
            name: 'userboard'
          })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    console.log('to.matched is a guest', to.matched)
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({
        name: 'userboard'
      })
    }
  } else {
    next()
  }
})

export default router

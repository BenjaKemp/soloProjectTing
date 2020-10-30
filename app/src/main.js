import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './api'
import sticky from './styles/Directives/sticky'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faTachometerAlt,
  faFileVideo,
  faFile,
  faMusic,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,
  faTachometerAlt,
  faFileVideo,
  faFile,
  faMusic,
  faCommentDots)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: "http://localhost:8000/",
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

Vue.config.productionTip = false

Vue.directive('sticky', sticky)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
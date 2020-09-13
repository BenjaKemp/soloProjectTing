import Vue from 'vue'
import Vuex from 'vuex'
import modules from './store/index'

Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
// Init the store
const store = new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production'
})

export default store

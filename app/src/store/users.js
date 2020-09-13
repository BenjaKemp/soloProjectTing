import getUsers from '../api/user/get-user.graphql'
import { apolloClient } from '../api'

  const getDefaultState = () => {
    return {
        users: []
    }
  }
  const state = getDefaultState()

  const getters = {}
  const mutations = {
    init(state, users) {
      state.users = users
    },
  }
  const actions = {
    async init ({ commit, rootState }, payload) {
        try {
          const query = await apolloClient.query({
            query: getUsers,
          })
          console.log('this is query     ',query)
          commit('init', result)
        } catch (e) {
          console.log(e)
          throw new Error('400')
        }
      }
  }
  const modules = {}
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }

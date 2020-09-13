const getDefaultState = () => {
    return {
      posts: []
    }
  }
  const state = getDefaultState()

  const getters = {}
  const mutations = {}
  const actions = {}
  const modules = {}

  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }

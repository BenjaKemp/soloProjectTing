// import getPlayers from '../api/player/get-players.graphql'
import jobSearch from '../api/cv/job-search.graphql'
import { apolloClient } from '../api'

const getDefaultState = () => {
    return {
        search: []
    }
}
const state = getDefaultState()

const getters = {

}
const mutations = {
    // the only place to mutate state
    init(state, players) {
        state.players = players
    },
    search(state, search) {
        state.search = search
    }
}
const actions = {
    async search({ commit }, whatever) {
        console.log('whatever      ', whatever)
        try {
            const query = await apolloClient.mutate({
                mutation: jobSearch,
                variables:{
                    input: whatever
                } 
            })
            const { data } = query
            console.log('this is data   ',data)
            commit('search', data.newSearch.res)
        } catch (e) {
            console.log('we have an error')
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

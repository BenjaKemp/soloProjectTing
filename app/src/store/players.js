import getPlayers from '../api/player/get-players.graphql'
import { apolloClient } from '../api'

const getDefaultState = () => {
    return {
        players: []
    }
}
const state = getDefaultState()

const getters = {
    singlePlayer: state => (id) => {
        return state.players.find(player => player._id === id)
    }
}
const mutations = {
    init(state, players) {
        state.players = players
    },
}
const actions = {
    async init({commit}) {
        try {
            const query = await apolloClient.query({
                query: getPlayers,
            })
            const { data  } =  query
            commit('init', data.getPlayers)
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

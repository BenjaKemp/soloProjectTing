import {
  apolloClient
} from '../api'
import getPosts from '../api/blog/get-posts.graphql'
import addPost from '../api/blog/add-post.graphql'
import deletePosts from '../api/blog/delete-post.graphql'
import likeComment from '../api/blog/like-comment.graphql'
const getDefaultState = () => {
  return {
    posts: []
  }
}
const state = getDefaultState()

const getters = {}
const mutations = {
  init(state, posts) {
    console.log('theae are the posts      ', posts)
    state.posts = posts
  },
}
const actions = {
  async init({
    commit
  }) {
    console.log("lets get some posts ")
    try {
      const query = await apolloClient.query({
        query: getPosts,
      })
      const {
        data
      } = query
      console.log('this is data in posts       ', data)
      commit('init', data.getPosts)
    } catch (e) {
      console.log(e)
      throw new Error('400')
    }
  },
  async likeComment({
    commit
  }) {
    try {
      const query = await apolloClient.query({
        query: likeComment,
        variables: {
          input: {
            postId: "5f70db743fb9ef9c709ae6a0",
            commentId: "5f70dc073fb9ef9c709ae6a1",
            authorId: "5f624f5d0983e4174538adf3"
          }
        }
      })
      const {
        data
      } = query
      console.log('this is the ting from blo0g       ', data)
      commit('likeComment', data.likeComment)

    } catch (e) {
      console.log('this is e     ', e)
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
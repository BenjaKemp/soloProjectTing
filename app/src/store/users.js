/* globals API_URL */
import { apolloClient } from '../api'
import { userService } from '../services/user.service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ?
  {
    status: {
      loggedIn: true
    },
    user,
    loggedAs: false
  } :
  {
    status: {},
    user: null,
    loggedAs: false
  }

const state = initialState

const getters = {
  /**
   * @function
   * @memberof module:app/store
   * @name Login Getters: login/getRoles
   * @description Get the currentSite.
   * @param {Object} state - The state.
   * @returns {string} The current user's role.
   * @example
   *
   * this.$store.getters['login/getRoles']
   */
  getRoles: state => {
    if (state.user) {
      return state.user.authorizations.role
    } else {
      return ''
    }
  }
}

const mutations = {
  /**
   * @function
   * @memberof module:store
   * @name Login Mutation: login/loginSuccess
   * @description Login mutation: Set the user in the store
   * @param {Object} state - Vuex state.
   * @param {Object} user - New user to set.
   * @example
   *
   * context.commit('login/loginSuccess', { firstname: 'Troudbalil', accessToken: 'omgwtfbbq' ... })
   */
  loginSuccess(state, user) {
    state.status = {
      loggedIn: true
    }
    state.user = user
    apolloClient.resetStore()
  },
  /**
   * @function
   * @memberof module:app/store
   * @name Login Mutation: login/loginFailure
   * @description Login failure mutation, Unset user if login failed, just in case
   * @param {Object} state - Vuex state.
   * @example
   *
   * context.commit('login/loginFailure')
   */
  loginFailure(state) {
    state.status = {}
    state.user = null
  },
  /**
   * @function
   * @memberof module:app/store
   * @name Login Mutation: login/logout: unset the user in the store
   * @description Logout mutation
   * @param {Object} state - Vuex state.
   * @example
   *
   * context.commit('login/logout')
   */
  logout(state) {
    state.status = {}
    state.user = null
    localStorage.removeItem('user')
    apolloClient.resetStore()
  },
  logAs(state, status) {
    state.logAs = status
  }
}

const actions = {
  /**
   * @function
   * @memberof module:app/store
   * @name Login Action: login/login
   * @description Login action
   * @param {Object} context - Vuex context.
   * @param {Object} context.dispatch - Dispatch action (Vuex).
   * @param {Object} context.commit - Commit mutation (Vuex).
   * @param {Object} args - Args.
   * @param {Object} args.email - The User Email.
   * @param {Object} args.password - The User Password.
   * @returns {Object|Error} The result.
   * @example
   *
   */
  async login({ dispatch, commit }, { email, password }) {
    try {
      const user = await userService.login({
        userId: email,
        password
      })
      if (user.redirectTo) {
        window.location.href = user.redirectTo
      } else {
        await dispatch('sites/getSites', {
          customerId: user.customerId
        }, {
          root: true
        })
        commit('loginSuccess', user)
      }
      return {
        status: 'success',
        body: user
      }
    } catch (e) {
      console.log(e)
      commit('loginFailure')
      const error = new Error('400')
      error.status = 400
      throw error
    }
  },
  async signup({ dispatch, commit }, { firstName, lastName, email, password, username }) {
    console.log('username     ',username)
    try {
      const user = await userService.signup({
        firstName,
        lastName,
        email,
        password,
        username
      })

      console.log('this is user      ',user)
      commit('loginSuccess', user)
      return {
        status: 'success',
        body: user
      }
    } catch (e) {
      console.log(e)
      commit('loginFailure')
      const error = new Error('400')
      error.status = 400
      throw error
    }
  },
  /**
   * @function
   * @memberof module:app/store
   * @name Login Action: login/logout
   * @description Log the user out
   * @param {Object} context - Vuex context.
   * @param {Object} context.commit - Commit the mutation to unset the user from the store.
   * @example
   *
   */
  logout({
    commit
  }) {
    userService.logout()
    commit('logout')
  },
  /**
   * @function
   * @memberof module:app/store
   * @name Login Action: login/updatePassword
   * @description Update user password (with old password)
   * @param {Object} context - Vuex context.
   * @param {Object} args - Args.
   * @param {Object} args.oldPass - The old password.
   * @param {Object} args.newPass - The new Password.
   * @returns {Object|Error} The result.
   * @example
   *
   * await this.$store.dispatch('login/updatePassword', { oldPass: 'myOldPassword', newPass: 'myNewPassword'})
   */
  async updatePassword(context, { oldPass, newPass }) {
    try {
      await apolloClient.mutate({
        mutation: updatePassword,
        variables: {
          input: {
            oldPassword: oldPass,
            newPassword: newPass
          }
        }
      })
      return {
        status: 'success',
        body: 'settings.passwordUpdated'
      }
    } catch (e) {
      const error = new Error('settings.wrongPassword')
      error.status = 400
      throw error
    }
  },
  /**
   * @function
   * @memberof module:app/store
   * @name Login Action: login/askNewPassword
   * @description Ask to send an email to recover password
   * @param {Object} context - Vuex context.
   * @param {string} email - The user's email.
   * @returns {Object|Error} The result.
   * @example
   *
   */
  async askNewPassword(context, email) {
    try {
      await fetch(`${API_URL}/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({
          'userId': email
        })
      })
      return {
        status: 'success',
        body: 'login.emailSent'
      }
    } catch (e) {
      const error = new Error('settings.error')
      error.status = 400
      throw error
    }
  },
  /**
   * @function
   * @memberof module:app/store
   * @name Login Action: login/resetPassword
   * @description Reset password and set a new one
   * @param {Object} context - Vuex context.
   * @param {Object} payload - Payload.
   * @param {Object} payload.token - The temporary access token (from the mail).
   * @param {Object} payload.password - The new password validated on the front.
   * @returns {Object|Error} The result.
   * @example
   *
   * await this.$store.dispatch('login/resetPassword', { 'password': 'LeBoucherIsAlive56', token: 'super-long-temporary-access-token-of-doom'})
   */
  async resetPassword(context, payload) {
    localStorage.setItem('user', JSON.stringify({
      accessToken: payload.token
    }))
    try {
      await apolloClient.mutate({
        mutation: resetPassword,
        variables: {
          input: {
            newPassword: payload.password
          }
        }
      })
      localStorage.removeItem('user')
      return {
        status: 'success',
        body: 'settings.passwordUpdated'
      }
    } catch (e) {
      console.log(e)
      localStorage.removeItem('user')
      const error = new Error('settings.error')
      error.status = 400
      throw error
    }
  },
  async logAs({ commit }, status) {
    commit('logAs', status)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

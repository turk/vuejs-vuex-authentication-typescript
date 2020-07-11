import { Module } from 'vuex'
import AuthService from '@/services/http/AuthService'

const auth: Module<any, any> = {
  namespaced: true,
  state: {
    status: { loggedIn: false },
    user: null
  },

  getters: {},

  mutations: {
    ['SET_USER'](state, user) {
      state.status.loggedIn = true
      state.user = user
    },
  },

  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('SET_USER', user)
          return Promise.resolve(user)
        }
      )
    },
  },


}

export default auth

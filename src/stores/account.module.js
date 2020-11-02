import AuthenService from '@/services/AuthenService'
import router from '@/router'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user, profile:null}
  : { status: {}, user: null, profile:null }

const mutations = {
  loginRequest(state) {
    state.status = { loggingIn: true }
    state.user = user
    state.profile = null
  },
  loginSuccess(state, {user, profile}) {
    state.status = { loggedIn: true }
    state.user = user
    state.profile = profile
  },
  loginFailure(state) {
    state.status = {}
    state.user = null
    state.profile = null
  },
  logout(state) {
    state.status = {}
    state.user = null
    state.profile = null
  }
}

const actions = {

  async loginWithCode({ commit }, code) {
    commit('loginRequest')

    var user = await AuthenService.validate_authorize(code)
    commit('loginSuccess', {user, profile: 'a'})

            

    router.push({ name: 'posts' })

  },

  logout({ commit }) {
    AuthenService.logout()
        .then( () => {
            commit('logout')
            router.push({name: 'posts'})
        })
    
  }
}

const getters = {
    access_token: state => {
        return state.access_token
    },
    token_type : state => {
        return state.token_type
    },
    refresh_token : state => {
        return state.refresh_token
    }
}

export const account = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
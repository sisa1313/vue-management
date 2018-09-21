// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
  loginState: false
}
const getters = {
  loginState: state => {
    if (!state.loginState) {
      return state.loginState = sessionStorage.getItem('loginState')
    }
    return state.loginState
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

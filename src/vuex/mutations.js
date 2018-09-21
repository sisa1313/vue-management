// store/mutations.js
import * as types from './mutations_type'
export default{
  [types.LOGIN_STATE] (state, data) {
    sessionStorage.setItem('loginState', data)
    state.loginState = data
  }
}

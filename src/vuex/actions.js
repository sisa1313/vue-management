// store/actions.js
import * as types from './mutations_type'
export default{
  LoginState ({commit}, data){
    commit(types.LOGIN_STATE, data)
  }
}

import {
  SHOW_LOGIN,
  SET_USER_FULL_NAME,
  SET_USER_NAME,
  SET_USER_PASSWORD,
  SET_USER_TOKEN
} from './constants'

export default {
  showLogin({ commit }, visibility) {
    commit(SHOW_LOGIN, visibility)
  },
  setUsername({ commit }, username) {
    commit(SET_USER_NAME, username)
  },
  setUserPassword({ commit }, password) {
    commit(SET_USER_PASSWORD, password)
  },
  setUserFullname({ commit }, fullname) {
    commit(SET_USER_FULL_NAME, fullname)
  },
  setUserToken({ commit }, token) {
    commit(SET_USER_TOKEN, token)
  }
}

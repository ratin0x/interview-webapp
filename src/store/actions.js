export default {
  showLogin({ commit }, visibility) {
    commit('showLogin', visibility)
  },
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
  setUserPassword({ commit }, password) {
    commit('setUserPassword', password)
  },
  setUserFullname({ commit }, fullname) {
    commit('setUserFullname', fullname)
  }
}

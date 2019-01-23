export default {
  showLogin(state, visibility) {
    state.showLoginDialog = visibility
  },
  setUsername(state, username) {
    state.user.username = username
  },
  setUserPassword(state, password) {
    state.user.password = password
  },
  setUserFullname(state, fullname) {
    state.user.fullname = fullname
  },
  setUserToken(state, token) {
    state.user.token = token
  },
  addError(state, error) {
    state.errors.push(error)
  },
  clearErrors(state) {
    state.errors = []
  }
}

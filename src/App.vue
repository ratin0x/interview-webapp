<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Interview</span>
        <span class="font-weight-light">&nbsp;WebApp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <AuthButton :loginAction="setShowLoginDialog" :logoutAction="logout" :isLoggedIn="isLoggedIn"></AuthButton>
    </v-toolbar>

    <v-content>
      <Message :title="title" :message="message"/>
      <LoginDialog :visible="this.showLoginDialog" :authUrl="this.authUrl"></LoginDialog>
    </v-content>
  </v-app>
</template>

<script>
import Message from './components/Message'
import LoginDialog from './components/LoginDialog'
import AuthButton from './components/AuthButton'
import { SHOW_LOGIN, SET_USER_TOKEN, SET_USER_NAME } from './store/constants'

/**
 * Simple application to authenticate with a service, display a message and logout.
 */
export default {
  name: 'App',
  components: {
    Message,
    LoginDialog,
    AuthButton
  },
  data() {
    return {
      title: 'Welcome'
    }
  },
  computed: {
    authUrl() {
      return (
        process.env.VUE_APP_AUTH_HOST +
        ':' +
        process.env.VUE_APP_AUTH_PORT +
        process.env.VUE_APP_AUTH_ENDPOINT
      )
    },
    showLoginDialog() {
      return this.$store.state.showLoginDialog
    },
    message() {
      const user = this.$store.state.user
      if (this.isLoggedIn) {
        return `Thank you for logging in, ${user.username}.`
      } else {
        return 'Please login to proceed.'
      }
    },
    isLoggedIn() {
      return this.$store.state.user.token.length > 0
    }
  },
  methods: {
    setShowLoginDialog() {
      this.$store.dispatch(SHOW_LOGIN, !this.$store.state.showLoginDialog)
    },
    logout() {
      this.$store.dispatch(SET_USER_TOKEN, '')
      this.$store.dispatch(SET_USER_NAME, '')
    }
  }
}
</script>

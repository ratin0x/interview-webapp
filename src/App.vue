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
import jwt from 'jsonwebtoken'

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
    authSecret() {
      return process.env.VUE_APP_AUTH_SECRET
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
      if (this.$store.state.user.token) {
        const verified = jwt.verify(
          this.$store.state.user.token,
          this.authSecret
        )
        // If we get a defined payload containing an expiry, we'll consider the token verified
        if (verified && verified.exp) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
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

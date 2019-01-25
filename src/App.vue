<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Interview</span>
        <span class="font-weight-light">&nbsp;WebApp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="setShowLoginDialog"
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
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
import { SHOW_LOGIN } from './store/constants'

export default {
  name: 'App',
  components: {
    Message,
    LoginDialog
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
      if (user.token) {
        return `Thank you for logging in, ${user.username}.`
      } else {
        return 'Please login to proceed'
      }
    }
  },
  methods: {
    setShowLoginDialog() {
      this.$store.dispatch(SHOW_LOGIN, !this.$store.state.showLoginDialog)
    }
  }
}
</script>

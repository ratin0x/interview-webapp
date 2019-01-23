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
      <Message :title="title" :message="msg"/>
      <LoginDialog :visible="this.showLoginDialog" message="Login Form Here"></LoginDialog>
    </v-content>
  </v-app>
</template>

<script>
import Message from './components/Message'
import LoginDialog from './components/LoginDialog'

export default {
  name: 'App',
  components: {
    Message,
    LoginDialog
  },
  data() {
    return {
      title: 'Welcome',
      msg: 'Please login to proceed'
    }
  },
  computed: {
    authUrl() {
      return process.env.VUE_APP_AUTH_HOST + ':' + process.env.VUE_APP_AUTH_PORT
    },
    showLoginDialog() {
      return this.$store.state.showLoginDialog
    }
  },
  methods: {
    setShowLoginDialog() {
      this.$store.dispatch('showLogin', !this.$store.state.showLoginDialog)
    }
  }
}
</script>

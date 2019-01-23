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
        :href="authUrl"
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Message :message="msg"/>
    </v-content>
  </v-app>
</template>

<script>
import Message from './components/Message'

export default {
  name: 'App',
  components: {
    Message
  },
  data: () => {
    return {
      msg: 'Please login to proceed'
    }
  },
  computed: {
    authUrl() {
      return process.env.VUE_APP_AUTH_HOST + ':' + process.env.VUE_APP_AUTH_PORT
    }
  }
}
</script>

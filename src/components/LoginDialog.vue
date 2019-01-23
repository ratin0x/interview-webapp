<template>
  <v-dialog v-model="dialog" max-width="450px">
    <v-card>
      <v-card-title>LoginDialog</v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-text-field label="Username" v-model="username" required></v-text-field>
            <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
          </v-layout>
        </v-container>
        {{message}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="toggleDialog">Cancel</v-btn>
        <v-btn @click="authenticate" :disabled="!canSubmit">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoginDialog',
  props: {
    message: String,
    visible: Boolean,
    authUrl: String
  },
  computed: {
    dialog: {
      get: function() {
        return this.$props.visible
      },
      set: function(newValue) {
        this.$store.dispatch('showLogin', newValue)
      }
    },
    username: {
      get: function() {
        return this.$store.state.user.username
      },
      set: function(newUsername) {
        this.$store.dispatch('setUsername', newUsername)
      }
    },
    password: {
      get: function() {
        return this.$store.state.user.password
      },
      set: function(newPassword) {
        this.$store.dispatch('setUserPassword', newPassword)
      }
    },
    canSubmit() {
      const user = this.$store.state.user
      return user.username && user.password
    }
  },
  methods: {
    toggleDialog: function() {
      return (this.dialog = !this.dialog)
    },
    authenticate: function() {
      console.log(
        `Authenticating user ${this.$store.state.user.username} with ${
          this.authUrl
        }`
      )
      this.toggleDialog()
    }
  }
}
</script>

<style>
</style>

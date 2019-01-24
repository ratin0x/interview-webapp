<template>
  <v-dialog v-model="dialog" max-width="450px">
    <v-form v-on:submit.prevent="authenticate">
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <label>Please enter your credentials and click 'Submit' to continue</label>
              <v-text-field label="Username" v-model="username" required></v-text-field>
              <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
            </v-layout>
          </v-container>
          <v-alert id="error-alert" type="error" v-show="showErrors">An error occurred.</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn id='login-cancel' @click="toggleDialog">Cancel</v-btn>
          <v-btn id='login-submit' :disabled="!canSubmit" type="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import {
  SHOW_LOGIN,
  SET_USER_NAME,
  SET_USER_PASSWORD,
  SET_USER_TOKEN,
  ADD_ERROR,
  CLEAR_ERRORS
} from '../store/constants'

export default {
  name: 'LoginDialog',
  props: {
    visible: Boolean,
    authUrl: String
  },
  computed: {
    dialog: {
      get: function() {
        return this.$props.visible
      },
      set: function(newValue) {
        this.$store.dispatch(SHOW_LOGIN, newValue)
        this.$store.dispatch(CLEAR_ERRORS, {})
      }
    },
    username: {
      get: function() {
        return this.$store.state.user.username
      },
      set: function(newUsername) {
        this.$store.dispatch(SET_USER_NAME, newUsername)
        this.$store.dispatch(CLEAR_ERRORS, {})
      }
    },
    password: {
      get: function() {
        return this.$store.state.user.password
      },
      set: function(newPassword) {
        this.$store.dispatch(SET_USER_PASSWORD, newPassword)
        this.$store.dispatch(CLEAR_ERRORS, {})
      }
    },
    token: {
      get: function() {
        return this.$store.state.user.token
      },
      set: function(newToken) {
        this.$store.dispatch(SET_USER_TOKEN, newToken)
      }
    },
    canSubmit() {
      const user = this.$store.state.user
      if (user.username && user.password) {
        return true
      } else {
        return false
      }
    },
    showErrors() {
      if (this.$store.state.errors.length) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    toggleDialog: function() {
      console.log('toggleDialog')
      this.$store.dispatch(SHOW_LOGIN, !this.dialog)
    },
    authenticate: function() {
      //TODO: Remove me
      console.log(
        `Authenticating user ${this.$store.state.user.username} with ${
          this.authUrl
        }`
      )
      const postData = {
        username: this.username,
        password: this.password
      }
      fetch(this.authUrl, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          return response.json()
        })
        .then(payload => {
          this.token = payload.token
          this.password = ''
          this.$store.dispatch(CLEAR_ERRORS, {})
        })
        .catch(err => {
          console.log(err)
          this.$store.dispatch(ADD_ERROR, err)
        })
        .finally(() => {
          if (!this.showErrors) {
            this.toggleDialog()
          }
        })
    }
  }
}
</script>

<style>
</style>

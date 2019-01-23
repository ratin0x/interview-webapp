<template>
  <v-dialog v-model="dialog" max-width="450px">
    <v-card>
      <v-card-title>LoginDialog</v-card-title>
      <v-card-text>{{message}}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoginDialog',
  props: {
    message: String,
    visible: Boolean
  },
  computed: {
    dialog: {
      get: function() {
        return this.$props.visible
      },
      set: function(newValue) {
        this.$store.dispatch('showLogin', newValue)
      }
    }
  },
  methods: {
    toggleDialog: function() {
      return (this.dialog = !this.dialog)
    }
  }
}
</script>

<style>
</style>

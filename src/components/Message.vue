<template>
  <v-container>
    <v-card>
      <v-card-title>Message</v-card-title>
      <v-card-text>{{message}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: String
  }
}
</script>

<style>
</style>

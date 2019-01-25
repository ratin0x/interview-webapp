<template>
  <v-container>
    <v-card>
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>{{message}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Message',
  props: {
    title: String,
    message: String
  }
}
</script>

<style>
</style>

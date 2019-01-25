<template>
  <v-btn
    flat
    @click="loginAction"
    v-if="!isLoggedIn"
  >
    <span class="mr-2">Login</span>
  </v-btn>
  <v-btn
    flat
    @click="logoutAction"
    v-else
  >
    <span class="mr-2">Logout</span>    
  </v-btn>  
</template>

<script>
export default {
  name: 'AuthButton',
  props: {
    loginAction: Function,
    logoutAction: Function,
    isLoggedIn: Boolean
  }
}
</script>

<style>
</style>

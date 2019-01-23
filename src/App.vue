<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Root msg="Webapp Root"/>
  </div>
</template>

<script>
import Root from './components/Root.vue'

export default {
  name: 'app',
  components: {
    Root
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

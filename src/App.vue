<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue'
import Navbar from './components/navbar/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

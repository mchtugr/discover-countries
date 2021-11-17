<template>
  <nav class="navbar" :class="{ 'navbar--dark': isDark }">
    <router-link to="/" class="navbar__logo">Where in the world?</router-link>
    <div class="navbar__theme">
      <sun-icon />
      <span>Light Mode</span>
    </div>
  </nav>
</template>

<script>
import SunIcon from '../icons/SunIcon.vue'
export default {
  components: { SunIcon },
  name: 'Navbar',
  data() {
    return {
      isDark: true,
    }
  },
}
</script>

<style lang="scss" src="./navbar.scss"></style>

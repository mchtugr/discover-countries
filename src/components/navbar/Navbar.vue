<template>
  <nav class="navbar" :class="{ 'navbar--dark': isDark }">
    <router-link to="/" class="navbar__logo">Where in the world?</router-link>
    <div v-if="isDark" class="navbar__theme" @click="changeTheme">
      <moon-icon />

      <span>Dark Mode</span>
    </div>
    <div v-else class="navbar__theme" @click="changeTheme">
      <sun-icon />
      <span>Light Mode</span>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SunIcon from '../icons/SunIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'

export default {
  components: { SunIcon, MoonIcon },
  name: 'Navbar',
  data() {
    return {}
  },
  computed: {
    ...mapState(['isDark']),
  },
  methods: {
    ...mapActions(['switchTheme']),
    changeTheme() {
      if (this.isDark) {
        document.body.style.backgroundColor = 'hsl(0, 0%, 100%)'
      } else {
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
      }
      this.switchTheme()
    },
  },
}
</script>

<style lang="scss" src="./navbar.scss"></style>

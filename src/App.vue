<template>
  <div id="app" class="app-wrapper" :class="{ 'app-wrapper--dark': isDark }">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './components/navbar/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    ...mapState(['isDark']),
  },
}
</script>

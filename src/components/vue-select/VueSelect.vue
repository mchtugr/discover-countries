<template>
  <div class="select-dropdown" :class="{ 'select-dropdown--dark': isDark }">
    <vSelect :placeholder="placeholder" :options="options"></vSelect>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mapState } from 'vuex'
export default {
  name: 'VueSelect',
  components: { vSelect },
  props: {
    options: Array,
    placeholder: String,
  },
  computed: {
    ...mapState(['isDark']),
  },
}
</script>

<style lang="scss" src="./vue-select.scss"></style>

<template>
  <div class="custom-input">
    <div
      class="custom-input__search-icon"
      :class="{ 'custom-input__search-icon--dark': isDark }"
    >
      <search-icon />
    </div>
    <input
      class="custom-input__field"
      :class="{ 'custom-input__field--dark': isDark }"
      v-model="keyword"
      :placeholder="placeholder"
      :type="type"
    />
    <div
      class="custom-input__close-icon"
      :class="{ 'custom-input__close-icon--dark': isDark }"
    >
      <close-icon />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchIcon from '../icons/SearchIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
export default {
  components: { SearchIcon, CloseIcon },
  name: 'CustomInput',
  props: {
    placeholder: String,
    type: String,
  },
  computed: {
    ...mapState(['isDark']),
  },
  data() {
    return {
      keyword: null,
    }
  },
}
</script>

<style lang="scss" src="./custom-input.scss"></style>

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
      :value="keyword"
    />
    <div
      class="custom-input__close-icon"
      :class="{ 'custom-input__close-icon--dark': isDark }"
      @click="clearSearch"
    >
      <close-icon />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      timeoutQuery: null,
    }
  },
  methods: {
    ...mapActions(['searchCountries', 'getAllCountries']),
    clearSearch() {
      this.keyword = null
    },
    // demo(value) {
    //   console.log(value)
    // },
  },
  // handle search when user stops typing
  watch: {
    keyword(query) {
      if (this.timeoutQuery) {
        clearTimeout(this.timeoutQuery)
      }
      if (query) {
        this.timeoutQuery = setTimeout(() => this.searchCountries(query), 300)
      } else {
        // if query is empty get all contries
        this.timeoutQuery = setTimeout(() => this.getAllCountries())
      }
    },
  },
}
</script>

<style lang="scss" src="./custom-input.scss"></style>

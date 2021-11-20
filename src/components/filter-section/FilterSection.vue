<template>
  <div class="filters-container">
    <div class="filters-container__searchbox">
      <custom-input placeholder="Search for a country ..." type="text" />
    </div>
    <div class="filters-container__dropdown">
      <vue-select
        placeholder="Filter by Region"
        :options="['All', 'Asia', 'Africa', 'Europe', 'Americas', 'Oceania']"
      />
    </div>
  </div>
</template>

<script>
import CustomInput from '../custom-input/CustomInput.vue'
import VueSelect from '../vue-select/VueSelect.vue'
export default {
  name: 'FilterSection',
  components: {
    VueSelect,
    CustomInput,
  },
}
</script>

<style lang="scss" src="./filter-section.scss"></style>

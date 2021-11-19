<template>
  <div class="home">
    <filter-section />
    <grid-container>
      <country-card
        v-for="(country, i) in countries"
        :key="i"
        :countryData="country"
      />
    </grid-container>
  </div>
</template>

<script>
import CountryCard from '../components/country-card/CountryCard.vue'
import FilterSection from '../components/filter-section/FilterSection.vue'
import GridContainer from '../components/grid-container/GridContainer.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: { FilterSection, GridContainer, CountryCard },
  computed: {
    ...mapState(['countries']),
  },
  methods: {
    ...mapActions(['getAllCountries']),
  },
  mounted() {
    this.getAllCountries()
  },
}
</script>

<style l GridContainerang="scss">
.home {
  padding: 30px;
}
</style>

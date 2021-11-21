<template>
  <div class="home">
    <filter-section />
    <grid-container v-if="filteredCountries.length > 0">
      <country-card
        v-for="(country, i) in filteredCountries"
        :key="i"
        :countryData="country"
      />
    </grid-container>
    <loading v-else />
  </div>
</template>

<script>
import CountryCard from '../components/country-card/CountryCard.vue'
import FilterSection from '../components/filter-section/FilterSection.vue'
import GridContainer from '../components/grid-container/GridContainer.vue'
import { mapActions, mapState } from 'vuex'
import Loading from '../components/loading/Loading.vue'
export default {
  name: 'Home',
  components: { FilterSection, GridContainer, CountryCard, Loading },

  computed: {
    ...mapState(['countries', 'region']),
    filteredCountries() {
      if (this.region === 'All' || this.region === null) {
        return this.countries
      } else {
        return this.countries.filter(
          (country) => country.region === this.region
        )
      }
    },
  },
  methods: {
    ...mapActions(['getAllCountries', 'filterRegion']),
  },
  watch: {
    region(val) {
      if (val === null) {
        this.filterRegion(null)
      }
    },
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

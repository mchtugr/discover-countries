<template>
  <div class="home">
    <filter-section />
    <grid-container>
      <country-card
        v-for="i in 15"
        :key="i"
        :countryData="{
          name: 'Argentina',
          population: 123123123,
          region: 'Americas',
          capital: 'Buenos Aires',
        }"
      />
    </grid-container>
  </div>
</template>

<script>
import CountryCard from '../components/country-card/CountryCard.vue'
import FilterSection from '../components/filter-section/FilterSection.vue'
import GridContainer from '../components/grid-container/GridContainer.vue'
export default {
  name: 'Home',
  components: { FilterSection, GridContainer, CountryCard },
}
</script>

<style l GridContainerang="scss">
.home {
  padding: 30px;
}
</style>

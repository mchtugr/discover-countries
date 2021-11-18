<template>
  <div class="grid-container">
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
  </div>
</template>

<script>
import CountryCard from '../country-card/CountryCard.vue'
export default {
  name: 'GridContainer',
  components: { CountryCard },
}
</script>

<style lang="scss" src="./grid-container.scss"></style>

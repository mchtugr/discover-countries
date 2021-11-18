<template>
  <div class="country-card" :class="{ 'country-card--dark': isDark }">
    <div class="country-card__imgbox">
      <img
        src="https://flagcdn.com/ar.svg"
        class="country-card__img"
        alt="flag"
      />
    </div>
    <div class="country-card__body">
      <h3 class="country-card__title">{{ countryData.name }}</h3>
      <p>Population: {{ countryData.population }}</p>
      <p>Region: {{ countryData.region }}</p>
      <p>Capital: {{ countryData.capital }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CountryCard',
  props: {
    countryData: Object,
  },
  computed: {
    ...mapState(['isDark']),
  },
}
</script>

<style lang="scss" src="./country-card.scss"></style>

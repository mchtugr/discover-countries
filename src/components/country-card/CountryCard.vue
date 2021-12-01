<template>
  <div
    class="country-card"
    :class="{ 'country-card--dark': isDark }"
    @click="goCountryDetailPage"
  >
    <div class="country-card__imgbox">
      <img :src="countryData.flag" class="country-card__img" alt="flag" />
    </div>
    <div class="country-card__body">
      <h3 class="country-card__title">{{ countryData.name }}</h3>
      <li class="country-card__list-item">
        <span class="boldish">Population: </span>
        <span>{{ countryData.population | showDecimalPoint }}</span>
      </li>
      <li class="country-card__list-item">
        <span class="boldish">Region: </span>
        <span>{{ countryData.region }}</span>
      </li>
      <li class="country-card__list-item">
        <span class="boldish">Capital: </span>
        <span>{{ countryData.capital }}</span>
      </li>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import filters from '../../filters/index'
export default {
  name: 'CountryCard',
  props: {
    countryData: Object,
  },
  computed: {
    ...mapState(['isDark']),
  },
  mixins: [filters],
  methods: {
    goCountryDetailPage() {
      this.$router.push({ path: `/${this.countryData.name}` })
    },
  },
}
</script>

<style lang="scss" src="./country-card.scss"></style>

<template>
  <div class="country-detail">
    <button
      class="country-detail__btn"
      :class="{ 'country-detail__btn--dark': isDark }"
      @click="goBack"
    >
      <back-icon />
      <span class="country-detail__btn-text">Go Back</span>
    </button>
    <country-detail-card :countryData="countryData" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CountryDetailCard from '../components/country-detail-card/CountryDetailCard.vue'
import BackIcon from '../components/icons/BackIcon.vue'
export default {
  components: { BackIcon, CountryDetailCard },
  name: 'CountryDetail',

  computed: {
    ...mapState(['isDark', 'countries']),
    countryData() {
      return this.countries.find(
        (country) => country.name === this.$route.params.country
      )
    },
  },
  methods: {
    ...mapActions(['getAllCountries']),
    goBack() {
      this.$router.push({ path: '/' })
    },
  },
  mounted() {
    this.getAllCountries()
  },
}
</script>

<style lang="scss" src="./country-detail.scss"></style>

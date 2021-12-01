<template>
  <div class="detail-card" v-if="countryData">
    <div class="detail-card__imgbox">
      <img
        :src="countryData.flag"
        :alt="countryData.name"
        class="detail-card__img"
      />
    </div>
    <div class="detail-card__body">
      <div class="detail-card__title">{{ countryData.name }}</div>
      <div
        class="detail-card__grid-container"
        :class="{ 'detail-card__grid-container--dark': isDark }"
      >
        <div class="detail-card__left-grid">
          <li class="detail-card__list-item">
            <span class="boldish">Native Name:</span>
            <span> {{ countryData.nativeName }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Population:</span>
            <span> {{ countryData.population | showDecimalPoint }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Region:</span>
            <span> {{ countryData.region }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Sub Region:</span>
            <span> {{ countryData.subregion }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Capital:</span>
            <span> {{ countryData.capital }}</span>
          </li>
        </div>
        <div class="detail-card__right-grid">
          <li class="detail-card__list-item">
            <span class="boldish">Top Level Domain:</span>
            <span> {{ countryData.topLevelDomain[0] }} </span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Currencies:</span>
            <span>
              {{ currencies }}
            </span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Languages:</span>
            <span> {{ languages }}</span>
          </li>
        </div>
      </div>
      <div class="detail-card__footer">
        <div class="boldish">Border Countries:</div>
        <div class="detail-card__border-countries">
          <div
            class="detail-card__border-country"
            v-for="(bc, i) in borderCountries"
            :key="i"
          >
            {{ bc }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading v-else />
</template>

<script>
import { mapState } from 'vuex'
import Loading from '../loading/Loading.vue'
import filters from '../../filters/index'
export default {
  components: { Loading },
  name: 'CountryDetailCard',
  props: {
    countryData: Object,
  },
  mixins: [filters],
  computed: {
    ...mapState(['isDark', 'countries']),
    // returns currencies arr as comma seperated string
    currencies() {
      return this.countryData.currencies
        .map((currency) => currency.name)
        .join(', ')
    },
    // returns languages arr as comma seperated string
    languages() {
      return this.countryData.languages
        .map((language) => language.name)
        .join(', ')
    },
    // map border country codes as full name
    borderCountries() {
      const neighbors = []
      this.countryData.borders?.forEach((countryCode) => {
        const newNeighbor = this.countries.find(
          (country) => country.alpha3Code === countryCode
        )
        neighbors.push(newNeighbor.name)
      })
      return neighbors
    },
  },
}
</script>

<style lang="scss" src="./country-detail-card.scss"></style>

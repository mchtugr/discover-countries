<template>
  <div class="detail-card">
    <div class="detail-card__imgbox">
      <img src="https://flagcdn.com/ar.svg" alt="" class="detail-card__img" />
    </div>
    <div class="detail-card__body">
      <div class="detail-card__title">Argentina</div>
      <div
        class="detail-card__grid-container"
        :class="{ 'detail-card__grid-container--dark': isDark }"
      >
        <div class="detail-card__left-grid">
          <li class="detail-card__list-item">
            <span class="boldish">Native Name:</span>
            <span> {{ 'Argentina' }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Population:</span>
            <span> {{ 123123123 }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Region:</span>
            <span> {{ 'Americas' }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Sub Region:</span>
            <span> {{ 'South Americas' }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Capital:</span>
            <span> {{ 'Buenos Aires' }}</span>
          </li>
        </div>
        <div class="detail-card__right-grid">
          <li class="detail-card__list-item">
            <span class="boldish">Top Level Domain:</span>
            <span> {{ 'ar' }} </span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Currencies:</span>
            <span> {{ 'Peso' }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Languages:</span>
            <span> {{ 'Spanish, French, German' }}</span>
          </li>
        </div>
      </div>
      <div class="detail-card__footer">
        <span class="boldish">Border Countries:</span>
        <div class="detail-card__border-countries">
          <div class="detail-card__border-country">Brazil</div>
          <div class="detail-card__border-country">Brazil</div>
          <div class="detail-card__border-country">Brazil</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CountryDetailCard',
  computed: {
    ...mapState(['isDark']),
  },
}
</script>

<style lang="scss" src="./country-detail-card.scss"></style>

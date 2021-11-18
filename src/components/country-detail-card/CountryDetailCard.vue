<template>
  <div class="detail-card">
    <div class="detail-card__imgbox">
      <img src="https://flagcdn.com/ar.svg" alt="" class="detail-card__img" />
    </div>
    <div class="detail-card__body">
      <h2 class="detail-card__title">Argentina</h2>
      <div class="detail-card__grid-container">
        <div class="detail-card__left-grid">
          <p>
            <span class="boldish">Native Name:</span>
            <span> {{ 'Argentina' }}</span>
          </p>
          <p>
            <span class="boldish">Population:</span>
            <span> {{ 123123123 }}</span>
          </p>
          <p>
            <span class="boldish">Region:</span>
            <span> {{ 'Americas' }}</span>
          </p>
          <p>
            <span class="boldish">Sub Region:</span>
            <span> {{ 'South Americas' }}</span>
          </p>
          <p>
            <span class="boldish">Capital:</span>
            <span> {{ 'Buenos Aires' }}</span>
          </p>
        </div>
        <div class="detail-card__right-grid">
          <p>
            <span class="boldish">Top Level Domain:</span>
            <span> {{ 'ar' }} </span>
          </p>
          <p>
            <span class="boldish">Currencies:</span>
            <span> {{ 'Peso' }}</span>
          </p>
          <p>
            <span class="boldish">Languages:</span>
            <span> {{ 'Spanish' }}</span>
          </p>
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
export default {
  name: 'CountryDetailCard',
}
</script>

<style lang="scss" src="./country-detail-card.scss"></style>

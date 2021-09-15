<template>
  <div class="customer-university-text-card">
    <h3 class="customer-university-text-card__title">
      {{ title }}
    </h3>
    <p class="customer-university-text-card__description">
      {{ description }}
    </p>
  </div>
</template>
<script>

export default {
  name: 'CustomerUniversityTextCard',
  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.customer-university-text-card{
  width: 90%;
  min-height: 475px;
  margin-bottom: 72px;
  &__title{
    @include font('Inter', 64px, 700);
    line-height: 109%;
    color: $text-color--white-primary;
    margin-bottom: 24px;
  }
  &__description{
    @include font('Inter', 25px, 400);
    line-height: 140%;
    letter-spacing: -0.013em;
    color: $text-color--white-primary;
  }
}
@media screen and (max-width: 1124px) {
  .customer-university-text-card{
    width: 100%;
    min-height:auto;
    &__title{
      @include font('Inter', 55px, 700);
      line-height: 127%;
    }
    &__description{
      @include font('Inter', 24px, 400);
      line-height: 146%;
    }
  }
}
@media screen and (max-width: 768px) {
  .customer-university-text-card{
    max-width: 100%;
    &__title{
      @include font('Inter', 36px, 700);
      line-height: 139%;
    }
    &__description{
      @include font('Inter', 18px, 400);
      line-height: 139%;
    }
  }
}
</style>

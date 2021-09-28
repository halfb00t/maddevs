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
.customer-university-text-card {
  width: 100%;
  max-width: 486px;
  margin-bottom: 72px;

  @media screen and (max-width: 1070px) {
    min-height: 300px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    min-height: auto;
  }

  &__title {
    @include font('Inter', 40px, 700);
    color: $text-color--white-primary;
    margin-bottom: 24px;

    @media screen and (max-width: 1024px) {
      @include font('Inter', 30px, 700);
      margin-bottom: 16px;
    }

    @media screen and (max-width: 768px) {
      @include font('Inter', 32px, 700);
      line-height: 139%;
    }
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    letter-spacing: -0.013em;
    color: $text-color--white-primary;

    @media screen and (max-width: 1024px) {
      @include font('Inter', 14px, 400);
      line-height: 146%;
    }
  }
}

</style>

<template>
  <div class="key-metrics-slice__content">
    <h2 class="key-metrics-slice__title">
      Mad Devs’ key metrics
    </h2>
    <div class="key-metrics-slice__grid">
      <div
        v-for="metric in metrics"
        :key="metric.title"
        class="key-metric"
        data-testid="key-metric"
      >
        <h3 class="key-metric__title">
          {{ metric.title }}
        </h3>
        <p class="key-metric__subtitle">
          {{ metric.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstVariation',
  props: {
    metrics: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
.key-metrics-slice {
  &__title {
    @include font('Poppins', 40px, 700);
    line-height: 48px;
    letter-spacing: -1px;
    margin-bottom: 22px;
    text-align: center;
    color: $text-color--black-lighter;
    @media screen and (max-width: 1024px) {
      font-size: 36px;
      line-height: 43px;
    }
  }
  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 1199px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.key-metric {
  padding: 27px 27px 24px;
  word-break: break-word;
  background-color: $bgcolor--white;
  @media screen and (max-width: 1024px) {
    padding: 29px 17px 13px;
  }
  @media screen and (max-width: 1024px) {
    padding: 28px 13px;
  }

  &__title,
  &__subtitle {
    text-align: center;
  }

  &__title {
    @include font('Poppins', 45px, 700);
    line-height: 47px;
    letter-spacing: -1px;
    color: $text-color--red;
    @media screen and (max-width: 1024px) {
      font-size: 38px;
      line-height: 40px;
    }
  }

  &__subtitle {
    @include font('Inter', 14px, 400);
    line-height: 22px;
    color: $text-color--black-lighter;
    @media screen and (max-width: 1024px) {
      margin-top: 8px;
      font-size: 12px;
      line-height: 21px;
    }
    @media screen and (max-width: 768px) {
      line-height: 16px;
    }
  }
}
</style>

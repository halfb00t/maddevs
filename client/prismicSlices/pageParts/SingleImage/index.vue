<template>
  <section class="image-slice">
    <div
      class="container"
      :data-aos="animation"
    >
      <div
        class="image-slice__wrapper"
        :style="{backgroundImage:`url(${url})`}"
      >
        <div class="image-slice__title">
          {{ slice.primary.title }}
        </div>
        <div class="image-slice__subtitle">
          <div class="image-slice__text">
            {{ slice.primary.text }}
          </div>
          <div class="image-slice__description">
            {{ slice.primary.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleImage',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      animation: this.slice?.primary?.animation,
      url: this.slice?.primary?.image?.url,
    }
  },
}
</script>

<style lang="scss" scoped>
.image-slice {
  color: $text-color--white-primary;
  background-color: $bgcolor--white-primary;

  &__wrapper {
    padding: 47px 40px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 386px;
    font-size: 30px;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: $text-color--cultured;
  }

  &__text {
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: $text-color--cultured;
  }
}
</style>

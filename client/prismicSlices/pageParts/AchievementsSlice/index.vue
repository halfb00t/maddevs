<template>
  <div class="wrapper">
    <section class="container achievements-container">
      <div
        v-for="(achievement, index) in achievements"
        :key="index"
        class="achievement"
        data-testid="achieve-block"
      >
        <img
          v-lazy-load
          class="achievement__image"
          :width="achievement.width"
          :height="achievement.height"
          :data-src="achievement.image.url"
          :alt="achievement.image.alt || 'Image'"
        >
        <h3 class="achievement__description">
          {{ achievement.description }}
        </h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AchievementsSlice',
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
      achievements: this.slice?.items,
    }
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  background-color: $bgcolor--white-primary;
}

.achievements-container {
  display: flex;
  justify-content: center;
  gap: 61px;

  @media screen and (max-width: 1200px) {
    gap: 30px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
}

.achievement {
  background-color: $bgcolor--cultured;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  padding: 27px 40px;
  max-width: 590px;

  &__image {
    margin-right: 55px;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: $text-color--black-oil;
  }

  @media screen and (max-width: 1125px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    flex-shrink: 1;

    &__image {
      margin-right: 0;
      margin-bottom: 12px;
      max-height: 60px;
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: left;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 14px 12px;

    &__description {
      font-size: 10px;
      letter-spacing: -0.4px;
    }
  }
}
</style>

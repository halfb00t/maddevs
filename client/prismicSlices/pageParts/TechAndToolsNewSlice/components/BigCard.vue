<template>
  <div
    data-testid="tech-big-card"
    class="technologies__big-card"
    :class="{ 'technologies__big-card--three-big-cards': threeCards,
              'technologies__big-card--two-big-cards': twoCards,
              'technologies__big-card--one-big-cards': oneCards }"
  >
    <div class="technologies__big-card-icon-wrapper">
      <img
        v-lazy-load
        :data-src="icon.url && icon.url"
        :alt="icon.alt || 'Icon'"
        class="technologies__big-card-icon"
        width="45"
        height="45"
      >
    </div>
    <div class="technologies__big-card-info">
      <h3 class="technologies__big-card-title">
        {{ title }}
      </h3>
      <p class="technologies__big-card-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BigCard',

  props: {
    icon: {
      type: Object,
      default: () => ({}),
    },

    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    threeCards: {
      type: Boolean,
      default: false,
    },

    twoCards: {
      type: Boolean,
      default: false,
    },

    oneCards: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.technologies__big-card {
  background: $bgcolor--black-pale;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 4px;

  &-info {
    flex-grow: 1;
  }

  &-title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    color: $text-color--white-primary;
    margin-bottom: 10px;
  }

  &-description {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    color: $text-color--silver;
  }

  &--two-big-cards {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 32px;
    .technologies__big-card-icon-wrapper {
      align-self: flex-start;
    }
  }

  &--one-big-cards {
    grid-column: 1 / 6;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 32px;
    .technologies__big-card-icon-wrapper {
      align-self: flex-start;
    }

    @media screen and (max-width: 1073px) {
      flex: 1 1 100%;
    }
  }

  &-icon {
    width: 45px;
    height: 45px;

    &-wrapper {
      display: inline-block;
      padding: 26px;
      border: 1px solid #36383A;
      border-radius: 9px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 604px) {
      width: 30px;
      height: 30px;
      &-wrapper {
        align-self: flex-start;
        padding: 15px;
      }
    }
  }

  @media screen and (max-width: 830px) {
    &--three-big-cards {
      display: flex;
      justify-content: center;
      gap: 24px;
      padding: 20px;
    }
  }

  @media screen and (max-width: 604px) {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 20px;

    &-title {
      font-size: 21px;
      line-height: 24px;
    }

    &-description {
      font-size: 16px;
    }
  }
}
</style>

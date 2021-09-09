<template>
  <div class="container">
    <div class="current-tag">
      <h1 class="current-tag__title">
        {{ title }}
      </h1>
      <p class="current-tag__posts-count">
        A collection of {{ count }} posts
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagBanner',

  props: {
    title: {
      type: String,
      default: null,
    },

    count: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
  .current-tag {
    padding-top: 117px;
    padding-bottom: 97px;
    color: $text-color--white-primary;
    &__title {
      font-size: 52px;
      line-height: 130%;
      letter-spacing: -2px;
    }
    &__posts-count {
      margin-top: 15px;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
    }
    @media only screen and (max-width: 991px) {
      padding-top: 134px;
      padding-bottom: 48px;
      &__title {
        font-size: 35px;
        letter-spacing: -1px;
      }
      &__posts-count {
        font-size: 17px;
        margin-top: 12px;
      }
    }
  }
</style>

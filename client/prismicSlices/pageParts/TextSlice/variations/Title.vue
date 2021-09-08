<template>
  <section
    class="title-slice"
    :class="[
      `title-slice-text--${position}`
    ]"
  >
    <component
      :is="tag"
      :style="{ maxWidth }"
      :class="[
        `title-slice-text`,
        `title-slice-text--${size}`,
      ]"
      v-html="title"
    />
  </section>
</template>

<script>
export default {
  name: 'TitleSlice',

  props: {
    title: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: 'h2',
    },

    maxWidth: {
      type: String,
      default: '100%',
    },

    position: {
      type: String,
      default: 'left',
    },

    size: {
      type: String,
      default: '16-px',
    },
  },
}
</script>

<style lang="scss" scoped>
  .title-slice {
    width: 100%;

    &-text {
      width: 100%;
      display: block;
      color: inherit;
      letter-spacing: -0.013em;

      // Positions
      &--left {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        > * {
          text-align: left;
        }
      }

      &--center {
        display: flex;
        align-items: flex-start;
        justify-content: center;

        > * {
          text-align: center;
        }
      }

      &--right {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;

        > * {
          text-align: right;
        }
      }

      // Sizes
      &--16-px {
        @include font('Inter', 16px, 400);
        line-height: 24px;
      }

      &--21-px {
        @include font('Inter', 21px, 400);
        line-height: 28px;
      }

      &--33-px {
        @include font('Inter', 33px, 600);
        line-height: 43px;
      }

      &--40-px {
        @include font('Inter', 40px, 700);
        line-height: 48px;
      }

      &--60-px {
        @include font('Inter', 60px, 800);
        line-height: 67px;
      }

      &--80-px {
        @include font('Inter', 80px, 800);
        line-height: 90px;
      }
    }
  }
</style>

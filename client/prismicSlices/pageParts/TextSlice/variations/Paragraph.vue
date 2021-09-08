<template>
  <section
    class="paragraph-slice"
    :class="[
      `paragraph-slice-text--${position}`,
    ]"
  >
    <p
      :class="[
        `paragraph-slice-text`,
        `paragraph-slice-text--${size}`,
        `paragraph-slice-text--${type}`,
      ]"
      :style="{ maxWidth }"
      v-html="text"
    />
  </section>
</template>

<script>
export default {
  name: 'ParagraphSlice',

  props: {
    text: {
      type: String,
      default: '',
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
      default: 'sm',
    },

    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="scss" scoped>
  .paragraph-slice {
    width: 100%;

    &-text {
      width: auto;
      max-width: 100%;
      display: block;
      color: inherit;
      letter-spacing: -1.3%;

      // Positions
      &--left {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        p {
          text-align: left;
        }
      }

      &--center {
        display: flex;
        align-items: flex-start;
        justify-content: center;

        p {
          text-align: center;
        }
      }

      &--right {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;

        p {
          text-align: right;
        }
      }

      // Sixes
      &--16-px {
        @include font('Inter', 16px, 400);
        line-height: 24px;
      }

      &--21-px {
        @include font('Inter', 21px, 400);
        line-height: 30px;
      }

      &--24-px {
        @include font('Inter', 24px, 400);
        line-height: 35px;
      }

      &--32-px {
        @include font('Inter', 32px, 400);
        line-height: 44px;
      }

      &--40-px {
        @include font('Inter', 40px, 600);
        line-height: 48px;
      }

      &--60-px {
        @include font('Inter', 60px, 600);
        line-height: 70px;
      }

      // Types
      &--list {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        &::before {
          content: '•';
          display: inline-block;
          color: inherit;
          margin-right: 8px;
          margin-left: 8px;
        }
      }
    }
  }
</style>

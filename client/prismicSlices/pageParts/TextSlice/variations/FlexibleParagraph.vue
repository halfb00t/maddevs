<template>
  <section
    class="paragraph-slice"
    :class="[
      `paragraph-slice--${position}`,
    ]"
  >
    <component
      :is="tag"
      :class="[
        `paragraph-slice-text`,
        `paragraph-slice-text--${size}`,
        `paragraph-slice-text--${type}`,
      ]"
      :style="cssVars"
      v-html="text"
    />
  </section>
</template>

<script>
export default {
  name: 'FlexibleParagraph',

  props: {
    text: {
      type: String,
      default: '',
    },

    maxWidth: {
      type: String,
      default: '100%',
    },

    tag: {
      type: String,
      default: 'p',
    },

    position: {
      type: String,
      default: 'left',
    },

    size: {
      type: String,
      default: '--16-px',
    },

    fontWeight: {
      type: String,
      default: '400',
    },

    textAlign: {
      type: String,
      default: 'left',
    },

    type: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    cssVars() {
      return {
        '--font-weight': this.fontWeight,
        '--text-align': this.textAlign,
        '--max-width': this.maxWidth,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.paragraph-slice {
  width: 100%;
  display: flex;
  align-items: flex-start;

  // Positions
  &--left {
    justify-content: flex-start;
  }

  &--center {
    justify-content: center;
  }

  &--right {
    justify-content: flex-end;
  }

  &-text {
    width: auto;
    display: block;
    color: inherit;
    letter-spacing: -0.013em;
    text-align: var(--text-align);
    max-width: var(--max-width);

    // Sixes
    &--16-px {
      @include font('Inter', 16px, var(--font-weight));
      line-height: 24px;
    }

    &--21-px {
      @include font('Inter', 21px, var(--font-weight));
      line-height: 30px;
    }

    &--24-px {
      @include font('Inter', 24px, var(--font-weight));
      line-height: 35px;
    }

    &--28-px {
      @include font('Inter', 28px, var(--font-weight));
      line-height: 40px;
    }

    &--32-px {
      @include font('Inter', 32px, var(--font-weight));
      line-height: 40px;
    }

    &--40-px {
      @include font('Inter', 40px, var(--font-weight));
      line-height: 48px;
    }

    &--60-px {
      @include font('Inter', 60px, var(--font-weight));
      line-height: 60px;
    }

    // Types
    &--list {
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

<template>
  <button
    :class="`customer-university__btn customer-university__btn--${size}`"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'CustomerUniversityButton',
  props: {
    label: {
      type: String,
      default: '',
    },

    size: {
      type: String,
      default: 'md',
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>
<style scoped lang="scss">
.customer-university {
  &__btn {
    @include font('Inter', 16px, 600);
    font-style: normal;
    line-height: 26px;
    letter-spacing: -0.035em;
    width: 100%;
    color: $text-color--quote-box;
    border: 1px solid $border-color--grey-pale;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: $text-color--white-primary;
      background: $button-bgcolor--red;
      border: 1px solid $border-color--red;
    }

    &--md {
      height: 48px;
      margin-top: 16px;
    }

    &--lg {
      height: 70px;
      margin-top: 70px;
    }

    @media screen and (max-width: 1024px) {
      &--md {
        margin-bottom: 72px;
      }
      &--lg {
        height: 48px;
      }
    }
  }

}
</style>

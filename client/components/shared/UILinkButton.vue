<template>
  <Component
    :is="isTag"
    :type="link ? 'button' : null"
    :href="linkTo"
    class="ui-link-button"
    :class="{
      'ui-link-button--grey': color === 'grey',
      'ui-link-button--black': color === 'black',
      'ui-link-button--red': color === 'red',
      'ui-link-button--blue': color === 'blue',
      'ui-link-button--full-width': fullWidth,
    }"
    @click="handleClick"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UILinkButton',
  props: {
    color: {
      type: String,
      default: 'grey',
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    isLink: {
      type: Boolean,
      default: false,
    },

    to: {
      type: String,
      default: '/',
    },
  },

  computed: {
    isTag() {
      if (this.isLink) return 'a'
      return 'button'
    },

    linkTo() {
      if (this.isLink) return this.to
      return null
    },
  },

  methods: {
    handleClick() {
      if (!this.disabled) this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-link-button {
  @include font('Inter', 16px, 600);
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  box-shadow: none;
  line-height: 20px;
  letter-spacing: -0.4px;
  transition: 0.4s;
  cursor: pointer;
  &--full-width {
    display: flex;
    width: 100%;
  }
  &--red {
    color: $text-color--red;
    &:hover {
      color: lighten($text-color--red, 10%);
    }
  }
  &--blue {
    color: $text-color--blue;
    &:hover {
      color: lighten($text-color--blue, 10%);
    }
  }
  &--black {
    color: $text-color--black;
    &:hover {
      color: lighten($text-color--black, 10%);
    }
  }
  &--grey {
    color: $text-color--quote-box;
    &:hover {
      color: lighten($text-color--quote-box, 10%)
    }
  }
}
</style>

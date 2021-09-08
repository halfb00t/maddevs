<template>
  <Component
    :is="isTag"
    :type="isLink ? 'button' : null"
    :href="linkTo"
    class="ui-outlined-button"
    :class="{
      'ui-outlined-button--grey': color === 'grey',
      'ui-outlined-button--black': color === 'black',
      'ui-outlined-button--red': color === 'red',
      'ui-outlined-button--blue': color === 'blue',
      'ui-outlined-button--full-width': fullWidth,
    }"
    @click="handleClick"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UIOutlinedButton',
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
.ui-outlined-button {
  @include font('Inter', 16px, 600);
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  box-shadow: none;
  border-radius: 4px;
  letter-spacing: -0.4px;
  padding: 16px 24px;
  line-height: 20px;
  border: 1px solid;
  transition: 0.4s;
  cursor: pointer;
  &--full-width {
    display: flex;
    width: 100%;
  }
  &--red {
    color: $text-color--red;
    border-color: $border-color--red;
    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white;
    }
  }
  &--blue {
    color: $text-color--blue;
    border-color: $border-color--blue;
    &:hover {
      background-color: $bgcolor--blue;
      color: $text-color--white;
    }
  }
  &--black {
    color: $text-color--black;
    border-color: $border-color--black;
    &:hover {
      background-color: $bgcolor--black;
      color: $text-color--white;
    }
  }
  &--grey {
    color: $text-color--quote-box;
    border-color: $border-color--grey-pale;
    &:hover {
      background-color: $border-color--grey-pale;
      color: $text-color--white;
    }
  }
}
</style>

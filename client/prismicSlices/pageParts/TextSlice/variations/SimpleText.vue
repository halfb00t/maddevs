<template>
  <p
    class="text-slice__content"
    :class="{ 'text-slice__content--large': large }"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'SimpleText',
  props: {
    large: {
      type: Boolean,
      default: false,
    },

    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.text-slice__content {
  text-align: center;
  &--large {
    font-weight: 600;
    font-size: 60px;
    line-height: 70px;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 40px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }
}
</style>

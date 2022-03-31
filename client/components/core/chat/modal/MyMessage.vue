<template>
  <div class="my-message">
    <span class="my-message__text">
      I'm interested in...
    </span>
    <div class="my-message__arrow-up" />
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
}
</script>

<style lang="scss" scoped>
.my-message {
  padding: 20px 25px;
  background-color: $bgcolor--chinese-white;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  margin-right: 15px;

  &__text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 142%;
    color: $text-color--black-oil;
  }

  &__arrow-up {
    position: absolute;
    bottom: 0;
    right: -15px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 15px solid $bgcolor--chinese-white;
  }
}
</style>

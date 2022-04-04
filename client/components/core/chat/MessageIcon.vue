<template>
  <section class="message">
    <div class="message__icon" />
    <div class="message__arrow" />
  </section>
</template>

<script>
export default {
  name: 'MessageIcon',
}
</script>

<style lang="scss" scoped>
.message {
  &__icon {
    width: 28px;
    height: 22px;
    background: $bgcolor--white-primary;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
  }

  &__arrow {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 11px solid transparent;
    border-right: 15px solid $border-color--white;
    position: absolute;
    top: 42%;
    left: 35%;
  }
}
</style>

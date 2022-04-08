<template>
  <section class="message">
    <div class="message__icon">
      <slot />
    </div>
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
  position: relative;
  width: 28px;
  height: 22px;
  border-radius: 3px;
  background: $bgcolor--white-primary;
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 14px;
    height: 14px;
    z-index: 1;
  }

  &__arrow {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 11px solid transparent;
    border-right: 15px solid $border-color--white;
    position: absolute;
    top: 6px;
    left: 7px;
    z-index: 0;
  }
}
</style>

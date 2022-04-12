<template>
  <div class="close" />
</template>

<script>
export default {
  name: 'CloseIcon',
}
</script>

<style lang="scss" scoped>
.close {
  background: transparent;
  width: 16px;
  height: 16px;

  &:before, &:after {
    position: absolute;
    content: ' ';
    height: 23px;
    width: 5px;
    top: 50%;
    left: 50%;
    background-color: $bgcolor--white-primary;
    border-radius: 2px;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>

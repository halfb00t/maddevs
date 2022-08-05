<template>
  <li
    :class="`list-item-custom-check-mark background-color-${backgroundColor}`"
  >
    <slot
      name="icon"
    />
    <slot
      name="description"
    />
  </li>
</template>
<script>
export default {
  name: 'ListItemCustomCheckMark',

  props: {
    backgroundColor: {
      type: String,
      default: 'silver',
    },
  },
}
</script>
<style scoped lang="scss">
.list-item-custom-check-mark {
  padding: 16.78px;
  display: flex;
  margin-bottom: 12px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
}
</style>

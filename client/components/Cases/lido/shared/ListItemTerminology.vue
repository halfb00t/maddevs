<template>
  <li class="list-item-terminology">
    <slot />
  </li>
</template>
<script>
export default {
  name: 'ListItemTerminology',
}
</script>
<style lang="scss" scoped>
.list-item-terminology {
  padding: 16px;
  background: $bgcolor--silver;
  border-radius: 8px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>

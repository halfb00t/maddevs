<template>
  <ol class="case-list_numbered-plain">
    <slot />
  </ol>
</template>

<script>
export default {
  name: 'ListNumbered',
}
</script>

<style scoped lang="scss">
.case-list_numbered-plain {
  margin: 0;
  padding-left: 25px;
}
</style>

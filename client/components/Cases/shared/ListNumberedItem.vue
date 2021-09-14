<template>
  <li class="case_list_numbered-plain_item">
    <span><slot name="bold" /></span>
    <slot />
  </li>
</template>

<script>
export default {
  name: 'ListNumberedItem',
}
</script>

<style scoped lang="scss">

.case_list_numbered-plain_item {
  @include default-text($text-color--black-oil, 17px, 166%, -0.03em, 400);

  &:last-child {
    margin-bottom: 0;
  }

  span {
    font-weight: 700
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}

</style>

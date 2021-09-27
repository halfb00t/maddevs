<template>
  <div
    :class="`case_statistics-container case_statistics-container-${grid}`"
  >
    <slot />
  </div>
</template>

<script>

export default {
  name: 'StatisticContainer',
  props: {
    grid: {
      type: Number,
      default: 3,
    },
  },
}
</script>

<style scoped lang="scss" >
.case {
  &_statistics-container-4 {
    @include grid(repeat(4, 1fr), auto, 0, 0);
  }
  &_statistics-container-3 {
    @include grid(repeat(3, 1fr), auto, 0, 0);
  }
  &_statistics-container-2 {
    @include grid(repeat(2, 1fr), auto, 0, 0);
  }

  @media screen and (max-width: 820px) {
    &_statistics-container {
      @include grid(repeat(1, 222px), auto, 0, 0);
      justify-content: center;
    }
  }
}
</style>

<template>
  <picture>
    <source
      v-lazy-load
      :data-srcset="[
        require(`@/assets/img/Home/webp/experts/${fileName}.webp`) + ' ',
        require(`@/assets/img/Home/webp/experts/${fileNameRetina}.webp`) + ' 2x',
      ]"
      class="multi-image"
      type="image/webp"
    >
    <img
      v-lazy-load
      :data-src="[require(`@/assets/img/Home/jpg/experts/${fileName}.jpg`)]"
      :data-srcset="[require(`@/assets/img/Home/jpg/experts/${fileNameRetina}.jpg`) + ' 2x']"
      :alt="alt || 'Image'"
      data-testid="test-multi-image"
      :width="width"
      :height="height"
      class="multi-image"
    >
  </picture>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    fileName: {
      type: String,
      default: undefined,
    },

    fileNameRetina: {
      type: String,
      default: undefined,
    },

    alt: {
      type: String,
      default: '',
    },

    width: {
      type: String,
      default: 'auto',
    },

    height: {
      type: String,
      default: 'auto',
    },
  },
}
</script>

<style>
.multi-image {
  width: 100%;
  height: 100%;
}
</style>

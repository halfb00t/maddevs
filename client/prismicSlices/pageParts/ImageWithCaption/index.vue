<template>
  <section class="container">
    <ImageCaptionSlice :slice="slice" />
  </section>
</template>

<script>
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice.vue'

export default {
  name: 'ImageWithCaption',
  components: {
    ImageCaptionSlice,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 816px;
}

/deep/ img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>

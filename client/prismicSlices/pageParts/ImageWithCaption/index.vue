<template>
  <section class="wrapper">
    <section class="container">
      <ImageCaptionSlice :slice="slice" />
    </section>
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
.wrapper {
  background: #ffffff;
  display: block;
  width: 100%;
}

.container {
  max-width: 816px;
}

/deep/ img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>

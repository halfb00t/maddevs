<template>
  <section
    class="image-slice"
    :style="{ backgroundColor: sliceBackground }"
    :data-aos="animation"
  >
    <div
      class="container"
    >
      <img
        v-lazy-load
        :style="{ backgroundColor: sliceBackground }"
        :data-src="image.url"
        :alt="image.alt || 'Image'"
        class="image-slice__image"
        data-testid="test-picture-img"
      >
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'ImageSlice',
  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      animation: this.slice.primary.animation,
      image: this.slice.primary.image,
      sliceBackground: setSliceBackground(this.slice?.primary?.colorTheme),
    }
  },
}
</script>

<style lang="scss" scoped>
.image-slice {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image{
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>

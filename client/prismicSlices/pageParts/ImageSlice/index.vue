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
        :style="{ backgroundColor: sliceBackground }"
        :src="image.url"
        :alt="image.alt || 'Image'"
        class="image-slice__image"
        data-testid="test-picture-img"
      >
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

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
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.colorTheme === 'white') return '#ffffff'
      if (this.slice?.primary?.colorTheme === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.colorTheme === 'black') return '#111213'
      return null
    },
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

<template>
  <section
    class="awards-slide"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="awards-slice__container container"
      data-testid="awards-animation-test"
      :data-aos="animation"
    >
      <div class="awards-slice__cards">
        <div
          v-for="award in awards"
          :key="award.image && award.image.url"
          class="award-card"
        >
          <img
            v-lazy-load
            :data-src="award.image && award.image.url"
            :alt="award.image && award.image.alt || 'Image'"
            :width="award.image && award.image.dimensions && award.image.dimensions.width"
            :height="award.image && award.image.dimensions && award.image.dimensions.height"
            class="award-card__image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'AwardsSlice',

  mixins: [
    animateOnScrollMixin({
      offset: 200,
      delay: 50,
      anchorPlacement: 'top-center',
      duration: 1000,
      once: true,
    }),
  ],

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
      awards: this.slice.items,
      animation: this.slice?.primary?.animation,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },
  },
}
</script>

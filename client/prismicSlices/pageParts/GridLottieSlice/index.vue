<template>
  <section
    class="grid-lottie"
    :style="{ backgroundColor: sliceBackground }"
  >
    <LazyHydrate
      v-if="slice.variation === 'default-slice'"
      when-visible
    >
      <GridLottie
        :items="slice.items"
        :data-aos="slice.primary.animation"
        data-testid="card-lottie"
      />
    </LazyHydrate>
    <LazyHydrate
      v-else-if="slice.variation === 'gridLottieLink'"
      when-visible
    >
      <GridLottieLink
        :items="slice.items"
        :data-aos="slice.primary.animation"
        data-testid="card-lottie-link"
      />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'GridLottieMain',

  components: {
    LazyHydrate,
    GridLottie: () => import('./variations/GridLottie'),
    GridLottieLink: () => import('./variations/GridLottieLink'),
  },

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

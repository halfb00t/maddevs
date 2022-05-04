<template>
  <section class="grid-lottie">
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
    <LazyHydrate
      v-else-if="slice.variation === 'gridWithAnimationOptionSlice'"
      when-visible
    >
      <GridWithAnimationOptionSlice
        :items="slice.items"
        :data-aos="slice.primary.animation"
        data-testid="card-lottie"
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
    GridWithAnimationOptionSlice: () => import('./variations/GridWithAnimationOptionSlice'),
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
}
</script>

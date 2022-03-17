<template>
  <section class="grid-lottie">
    <GridLottie
      v-if="slice.variation === 'default-slice'"
      :items="slice.items"
      :data-aos="slice.primary.animation"
      data-testid="card-lottie"
    />
    <GridLottieLink
      v-else-if="slice.variation === 'gridLottieLink'"
      :items="slice.items"
      :data-aos="slice.primary.animation"
      data-testid="card-lottie-link"
    />
  </section>
</template>

<script>
import GridLottie from './variations/GridLottie'
import GridLottieLink from './variations/GridLottieLink'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'GridLottieMain',

  components: {
    GridLottie,
    GridLottieLink,
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

<template>
  <section
    class="key-metrics-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container"
      :data-aos="slice.primary.animation"
      data-testid="key-metrics-slice__container"
    >
      <FirstVariation
        v-if="slice.variation === 'default-slice'"
        v-bind="slice.primary"
        :metrics="slice.items"
        data-testid="first-variation"
      />
      <SecondVariation
        v-else-if="slice.variation === 'secondVariation'"
        v-bind="slice.primary"
        :metrics="slice.items"
        data-testid="second-variation"
      />
      <ThirdVariation
        v-else-if="slice.variation === 'thirdVariation'"
        v-bind="slice.primary"
        :metrics="slice.items"
        data-testid="third-variation"
      />
    </div>
  </section>
</template>

<script>
import FirstVariation from './variations/FirstVariation'
import SecondVariation from './variations/SecondVariation'
import ThirdVariation from './variations/ThirdVariation'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'KeyMetricsSlice',
  components: {
    FirstVariation,
    SecondVariation,
    ThirdVariation,
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

  data() {
    return {
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
    }
  },
}
</script>

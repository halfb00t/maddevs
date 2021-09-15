<template>
  <section>
    <TechnologiesAndTools
      v-if="slice.variation === 'default-slice'"
      v-bind="slice"
      :data-aos="slice.primary.animation"
    />
    <ToolsGrid
      v-if="slice.variation !== 'default-slice'"
      v-bind="slice.primary"
    />
  </section>
</template>

<script>
import TechnologiesAndTools from './variations/TechnologiesAndTools'
import ToolsGrid from './variations/ToolsGrid'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'TechnologyGridMain',
  components: {
    TechnologiesAndTools,
    ToolsGrid,
  },

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
}
</script>

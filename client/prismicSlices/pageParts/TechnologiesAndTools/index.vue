<template>
  <section
    class="card-grid-main"
    :style="{ backgroundColor: sliceBackground }"
  >
    <TechnologiesAndTools
      v-if="slice.variation === 'default-slice'"
      v-bind="slice"
      :data-aos="slice.primary.animation"
      data-testid="technologies-grid-variation"
    />
    <ToolsGrid
      v-if="slice.variation === 'toolsGrid'"
      v-bind="slice"
      :slice="slice"
      data-testid="tools-grid-variation"
    />
    <ExistingToolsGrid
      v-if="slice.variation === 'existingToolsGrid'"
      v-bind="slice.primary"
      data-testid="existing-grid-variation"
    />
  </section>
</template>

<script>
import TechnologiesAndTools from './variations/TechnologiesAndTools'
import ToolsGrid from './variations/ToolsGrid'
import ExistingToolsGrid from './variations/ExistingToolsGrid'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'ToolsGridMain',
  components: {
    TechnologiesAndTools,
    ToolsGrid,
    ExistingToolsGrid,
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

  data() {
    return {
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
    }
  },
}
</script>

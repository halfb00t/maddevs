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
      data-testid="tools-grid-variation"
    />
  </section>
</template>

<script>
import TechnologiesAndTools from './variations/TechnologiesAndTools'
import ToolsGrid from './variations/ToolsGrid'
import ExistingToolsGrid from './variations/ExistingToolsGrid'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

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

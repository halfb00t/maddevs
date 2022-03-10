<template>
  <section
    class="card-grid-main"
    :style="{ backgroundColor: sliceBackground }"
  >
    <LazyHydrate
      v-if="slice.variation === 'default-slice'"
      when-visible
    >
      <TechnologiesAndTools
        v-bind="slice"
        :data-aos="slice.primary.animation"
        data-testid="technologies-grid-variation"
      />
    </LazyHydrate>
    <LazyHydrate
      v-if="slice.variation === 'toolsGrid'"
      when-visible
    >
      <ToolsGrid
        v-bind="slice"
        :slice="slice"
        data-testid="tools-grid-variation"
      />
    </LazyHydrate>
    <LazyHydrate
      v-if="slice.variation === 'existingToolsGrid'"
      when-visible
    >
      <ExistingToolsGrid
        v-bind="slice.primary"
        data-testid="existing-grid-variation"
      />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'ToolsGridMain',
  components: {
    LazyHydrate,
    TechnologiesAndTools: () => import('./variations/TechnologiesAndTools'),
    ToolsGrid: () => import('./variations/ToolsGrid'),
    ExistingToolsGrid: () => import('./variations/ExistingToolsGrid'),
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

<template>
  <section
    class="card-grid-main"
    :style="{ backgroundColor: sliceBackground }"
  >
    <CardGrid
      v-if="slice.variation === 'default-slice'"
      v-bind="slice"
      :data-aos="slice.primary.animation"
    />
    <CardGridWithIcon
      v-else-if="slice.variation === 'cardGridWithIcon'"
      v-bind="slice.primary"
      :items="slice.items"
      :data-aos="slice.primary.animation"
    />
    <RichTextCards
      v-else-if="slice.variation === 'richTextCards'"
      v-bind="slice.primary"
      :items="slice.items"
      :data-aos="slice.primary.animation"
    />
  </section>
</template>

<script>
import CardGrid from './variations/CardGrid'
import CardGridWithIcon from './variations/CardGridWithIcon'
import RichTextCards from './variations/RichTextCards'

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CardGridMain',
  components: {
    CardGrid,
    CardGridWithIcon,
    RichTextCards,
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
      if (this.slice.primary.background === 'white') return '#fff'
      if (this.slice.primary.background === 'grey') return '#f5f7f9'
      if (this.slice.primary.background === 'black') return '#111213'
      return null
    },
  },
}
</script>

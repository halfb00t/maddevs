<template>
  <section
    class="card-grid-main"
    :style="{ backgroundColor: sliceBackground }"
  >
    <StartScreen
      v-if="slice.variation === 'default-slice'"
      data-testid="start-screen-variation"
      v-bind="slice"
      :slice="slice"
    />
    <Description
      v-if="slice.variation !== 'default-slice'"
      data-testid="description-variation"
      v-bind="slice"
      :slice="slice"
    />
  </section>
</template>

<script>
import StartScreen from './variations/StartScreen'
import Description from './variations/Description'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'StartScreenMain',
  components: {
    StartScreen,
    Description,
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

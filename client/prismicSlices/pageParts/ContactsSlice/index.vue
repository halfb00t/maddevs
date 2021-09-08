<template>
  <section class="contacts-slice">
    <FirstVariation
      v-if="slice.variation === 'default-slice'"
      v-bind="slice.primary"
      :data-aos="slice.primary.animation"
    />
  </section>
</template>

<script>
import FirstVariation from './variations/FirstVariation'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'ContactsSlice',
  components: {
    FirstVariation,
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

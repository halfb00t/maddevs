<template>
  <Lottie
    id="dev-page"
    :options="options"
    @animCreated="handleAnimation"
  />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import playLottieMixin from '@/mixins/playLottieMixin'

export default {
  name: 'CardAnimation',

  components: {
    Lottie,
  },

  mixins: [
    playLottieMixin('dev-page', {
      animationData: () => require(`@/assets/lottie/development/${this.animation}.json`),
      autoplay: false,
      loop: false,
    }),
  ],

  props: {
    animation: {
      type: String,
      default: '',
    },
  },
}
</script>

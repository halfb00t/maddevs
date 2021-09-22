<template>
  <Lottie
    id="dev-page"
    :options="lottieOptions"
    @animCreated="animCreatedHandler"
  />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import playLottie from '@/helpers/playLottie'

export default {
  name: 'CardAnimation',

  components: {
    Lottie,
  },

  props: {
    animationName: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      animationData: null,
    }
  },

  computed: {
    lottieOptions() {
      return {
        animationData: require(`@/assets/lottie/development/${this.animationName}.json`),
        autoplay: false,
        loop: false,
      }
    },
  },

  methods: {
    animCreatedHandler(animation) {
      playLottie(animation, 'dev-page')
    },
  },
}
</script>

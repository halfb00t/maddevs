<template>
  <Lottie
    :id="animationId"
    :options="lottieOptions"
    @animCreated="animCreatedHandler"
  />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import { v4 as uuidv4 } from 'uuid'
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

    animationId() {
      const id = uuidv4()
      return `${this.animationName}-${id}`
    },
  },

  methods: {
    animCreatedHandler(animation) {
      playLottie(animation, this.animationId)
    },
  },
}
</script>

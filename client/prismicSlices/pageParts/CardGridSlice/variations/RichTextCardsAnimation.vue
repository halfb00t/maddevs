<template>
  <section>
    <div class="lottie">
      pass
    </div>
  </section>
</template>

<script>
// import Lottie from 'vue-lottie/src/lottie.vue'
import playLottieMixin from '@/mixins/playLottieMixin'
import animationData from '@/assets/lottie/development/lottie_anim2.json'

export default {
  name: 'RichTextCardsAnimation',

  // components: {
  //   Lottie,
  // },

  mixins: [
    playLottieMixin('power-supply', {
      animationData,
      autoplay: false,
      loop: false,
    }),
  ],
}
</script>

<template>
  <section>
    <section class="container_regular m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <TextParagraph>
        Keeping up with the technological evolution, Mad Devs undertook the development of a new-generation
        intersection monitoring system for a company called CityCam. The system’s purpose is to let anyone
        monitor traffic in a city in real time. Traffic monitoring can help prevent congestion, and overall,
        it makes transportation safer and faster. The project, known internally as Microphotographer, was largely
        about hardware and featured two major parts: engineering the camera device with backend for it and building an
        application with frontend and backend.
      </TextParagraph>
    </section>
    <section class="container_regular m-72_bottom media-m-48_bottom">
      <Lottie
        id="about-citycam"
        :options="options"
        @animCreated="handleAnimation"
      />
    </section>
  </section>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import playLottieMixin from '@/mixins/playLottieMixin'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import animationData from '@/assets/lottie/citycam/about-citycam.json'

export default {
  name: 'About',
  components: {
    TextParagraph,
    Lottie,
  },

  mixins: [playLottieMixin('about-citycam', {
    animationData,
    autoplay: false,
    loop: false,
  })],
}
</script>

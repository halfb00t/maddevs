<template>
  <section>
    <section class="container_regular m-48_top media-m-24_top m-24_bottom media-m-48_bottom">
      <TextParagraph>
        Keeping up with the technological evolution, Mad Devs undertook the development of a new-generation
        intersection monitoring system for a company called CityCam. The system’s purpose is to let anyone
        monitor traffic in a city in real time. Traffic monitoring can help prevent congestion, and overall,
        it makes transportation safer and faster. The project, known internally as Microphotographer, was largely
        about hardware and featured two major parts: engineering the camera device with backend for it and building an
        application with frontend and backend.
      </TextParagraph>
    </section>
    <section class="container_full background-color-gray-light">
      <Lottie
        id="about-citycam"
        :options="options"
        class="case_lottie"
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

<style scoped lang="scss">
.case {
  &_lottie {
    max-width: 764px;
    height: 368px;
    position: relative;
    padding: 13px 0 14px;

    @media screen and (max-width: 768px) {
      padding: 35px 0;
    }

    @media screen and (max-width: 576px) {
      max-width: 230px;
      padding: 20px 0;
      left: 16px;
    }
  }
}

.text-center {
  text-align: center;
}
</style>

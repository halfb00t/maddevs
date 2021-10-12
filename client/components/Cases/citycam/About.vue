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
      <LottieMad
        id="about-citycam"
        class="case_lottie"
        height="395"
        :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/about-citycam.json`)"
        @animCreated="handleAnimation"
      />
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import playLottie from '@/helpers/playLottie'

export default {
  name: 'About',
  components: {
    TextParagraph,
    LottieMad,
  },

  methods: {
    handleAnimation(animation) {
      playLottie(animation, 'about-citycam')
    },
  },
}
</script>

<template>
  <section class="m-96_bottom media-m-48_bottom">
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        Project development workflow
      </h3>
      <TextParagraph>
        Transparency is the fundamental principle that Mad Devs applies in project development and communication
        either within the internal team or in customer relationships. By combining transparency with the agile method,
        we keep the project team continually engaged and allow for relevant adjustments at the right
        time and at any stage of the project.
      </TextParagraph>
    </div>
    <div class="container_full background-color-silver p-12_top p-12_bottom">
      <div class="container_regular">
        <LottieMad
          class="case_lottie"
          height="437px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bandpay/lottie/project-development.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'

export default {
  name: 'ProjectDevelopment',
  components: {
    TextParagraph,
    LottieMad,
  },
}
</script>

<template>
  <section class="case_video-on-demand">
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Phase 4: Video on demand
      </h3>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Video on Demand (VoD) functionality was added to the platform in 2019. To adapt it to the most current VoD
        standards, Mad Devs leveraged Nimble Streamer and Nimble Transcoder. The viewers received access to the
        present-day VoD experience, enabling on-the-go movie ordering and MD5 hotlink protection.
      </TextParagraph>
    </div>
    <div class="container_full background-color-silver m-96_bottom media-m-48_bottom">
      <div class="container_regular">
        <LottieMad
          id="video-on-demand"
          class="case_lottie"
          height="448px"
          :lottie-link="$getMediaFromS3(`/images/Cases/yourcast/lottie/phase-video-on-demand.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import LottieMad from '@/components/shared/LottieMad'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'PhaseVideoOnDemand',
  components: {
    TextParagraph,
    LottieMad,
  },
}
</script>

<style lang="scss" scoped>
  .case {
    &_lottie {
      max-width: 515px;
      padding: 51px 0;
    }
  }
</style>

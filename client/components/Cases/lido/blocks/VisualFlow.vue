<template>
  <section class="case-lido__visual-flow m-96_bottom media-m-48_bottom">
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <h4 class="case-lido__visual-flow-title m-24_bottom media-m-12_bottom">
        Here’s visual flow:
      </h4>
      <TextParagraph>
        Also, 100% test coverage was a prerequisite, as well as a test that would pass the entire Smart Contract procedure.
      </TextParagraph>
    </div>
    <div class="container_full background-color-silver p-72_top p-56_bottom m-48_bottom media-p-32_top media-p-32_bottom media-m-24_bottom">
      <div class="container_regular">
        <LottieMad
          class="case_lottie"
          height="603.24px"
          :lottie-link="$getMediaFromS3(`/images/Cases/lido/lottie/visual-flow.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <EmbedCard v-bind="testingProcessData" />
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import EmbedCard from '@/components/Cases/shared/EmbedCard'
import { testingProcessData } from '@/data/caseLido'

export default {
  name: 'VisualFlow',
  components: { EmbedCard, TextParagraph, LottieMad },
  data() {
    return {
      testingProcessData,
    }
  },
}
</script>
<style scoped lang="scss">
.case-lido__visual-flow {
  &-title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    color: $text-color--black-oil;
  }
}
</style>

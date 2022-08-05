<template>
  <section class="case-lido__results m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3 class="case_title_h2 m-12_bottom">
        Results
      </h3>
      <TextParagraph class="m-24_bottom">
        After collaborating with the Lido team, both goals were accomplished and are now operating efficiently.
      </TextParagraph>
      <TextParagraph>
        The second phase of the work was completed in January 2022. Since February, the Lido service has grown and received positive feedback:
      </TextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-12_top m-96_bottom media-m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="lido"
            file="tvl-rankings"
            extension="png"
            alt="TVL Rankings"
          />
        </div>
      </div>
      <TextParagraph class="case_text-align-center case-lido__results-source-text m-12_top">
        Source: <a
          href="https://www.defipulse.com/"
          target="_blank"
        >
          DeFI</a>
      </TextParagraph>
    </div>
    <div class="container_regular">
      <TextParagraph class="m-24_bottom">
        Our joint work helped to strengthen and improve the service, which had a positive impact on the overall statistics of its work:
      </TextParagraph>
      <TwitterCard id="1498248565495418881" />
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import TwitterCard from '@/components/Cases/lido/shared/TwitterCard'

export default {
  name: 'Results',
  components: {
    TwitterCard,
    TextParagraph,
    Picture,
  },
}
</script>
<style lang="scss" scoped>
.case-lido__results {
  &-source-text {
    font-size: 14px;
    line-height: 166%;
    color: $text-color--grey-opacity-40-percent;
    a {
      color: $text-color--grey-opacity-40-percent;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 480px) {
    &-twitter-image {
      display: none;
    }
  }
}
</style>

<template>
  <section class="m-96_bottom media-m-48_bottom">
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        Implementing CI/CD pipelines
      </h3>
      <TextParagraph class="m-12_bottom">
        The Mad Devs developers set up CI/CD pipelines to automate the delivery of the BandPay mobile apps using
        Fastlane and GitLab CI. The CI/CD pipelines we implemented include a range of automated procedures, such as:
      </TextParagraph>
      <ol class="case_advantages-list">
        <li class="case_advantages-item">
          <span>Linting -</span> Checks the code for programmatic and stylistic errors
        </li>
        <li class="case_advantages-item">
          <span>Unit testing -</span> Verifies the individual components of the app
        </li>
        <li class="case_advantages-item">
          <span>Integration testing -</span> Checks how different components of the app work together
        </li>
        <li class="case_advantages-item">
          <span>End-to-end testing -</span> Verifies the entire flow of the app from start to finish
        </li>
        <li class="case_advantages-item">
          <span>Code coverage reporting -</span> Shows how much of the code is tested
        </li>
        <li class="case_advantages-item">
          <span>Build & deployment -</span> Builds and deploys the code to staging and production
        </li>
      </ol>
    </div>
    <div class="container_full background-color-silver p-24_top p-24_bottom">
      <div class="container_regular">
        <LottieMad
          class="case_lottie"
          height="326px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bandpay/lottie/implementing-pipelines.json`)"
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
  name: 'ImplementingPipelines',
  components: {
    TextParagraph,
    LottieMad,
  },
}
</script>
<style lang="scss" scoped>
.case {
  &_advantages-list {
    margin: 0;
    padding-left: 25px;
  }

  &_advantages-item {
    margin-bottom: 0;
    @include default-text($text-color--black-oil, 17px, 166%, -0.03em, 400);

    span {
      font-weight: 700
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 5px;
      font-size: 16px;
    }
  }
}
</style>

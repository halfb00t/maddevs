<template>
  <section>
    <div class="container_regular m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <TextParagraph>
        Critical vulnerabilities can cost you a lot if they are not detected before your IT project goes to production.
        The security industry has to adjust to the challenges of cloud-first deployment and continuous security
        monitoring and testing. This is the niche that GuardRails fills, offering automated vulnerability scanning for
        code as part of a standard development process built under the DevSecOps approach.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver p-72_bottom m-72_bottom media-m-48_bottom case_review-container"
      :style="{ backgroundImage: `url(${$getMediaFromS3(`/images/Cases/guardrails/png/statistics-background.png`)})`}"
    >
      <div class="container_regular">
        <h2 class="case_title_h2 case_title p-72_top media-p-41_top m-48_bottom media-m-24_bottom">
          GuardRails facts & figures
        </h2>
        <StatisticsContainer class="m-48_bottom">
          <StatisticCard
            v-for="(review, i) in reviewsStatistics"
            :id="`about-item-${i}`"
            :key="review.description"
            :number="review.number"
            :number-text="review.numberText"
            :name="review.name"
            :without-space-before-number="review.withoutSpaceBeforeNumber"
            :without-space-after-number="review.withoutSpaceAfterNumber"
            :text-before-number="review.textBeforeNumber"
            :has-space-before-number="false"
            :has-space-after-number="false"
            :number-color="review.numberColor"
            :description="review.description"
            :icon="review.icon"
            section="about"
            :index="i"
          />
        </StatisticsContainer>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'

import { reviewsStatistics } from '@/data/caseGuardrails'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'

import countUp from '@/helpers/countUp'

export default {
  name: 'About',
  components: {
    StatisticCard,
    StatisticsContainer,
    TextParagraph,
  },

  mixins: [
    IntersectionObserverMixin(
      ['statistics-about-1', 'statistics-about-2', 'statistics-about-3'],
      countUp,
    ),
  ],

  data() {
    return {
      reviewsStatistics,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_title {
    text-align: center;
  }

  &_review-container {
    background-position: left center, right top;
    background-size: 100%;
    background-repeat: no-repeat;
    @media screen and (max-width: 945px) {
      background-size: 400px;
    }
  }

}
</style>

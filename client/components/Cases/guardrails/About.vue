<template>
  <section>
    <div class="container_regular m-48_top media-m-24_top m-72_bottom media-m-24_bottom">
      <TextParagraph>
        Critical vulnerabilities can cost you a lot if they are not detected before your IT project goes to production.
        The security industry has to adjust to the challenges of cloud-first deployment and continuous security
        monitoring and testing. This is the niche that GuardRails fills, offering automated vulnerability scanning for
        code as part of a standard development process built under the DevSecOps approach.
      </TextParagraph>
    </div>
    <div
      class="container_full about-block-background background-color-silver p-72_bottom m-96_bottom media-m-48_bottom case_review-container"
      :style="{ backgroundImage: `url(${$getMediaFromS3(`/images/Cases/guardrails/png/statistics-background.png`)})`}"
    >
      <div class="container_regular">
        <h2 class="case_title_h2 case_title p-72_top media-p-41_top m-48_bottom media-m-24_bottom">
          GuardRails facts & figures
        </h2>
        <StatisticsContainer class="m-72_bottom">
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

        <div class="technologies-list__wrapper">
          <span class="technologies-list__title m-48_bottom">
            GuardRails is trusted by 1000+ software development teams globally—from startups to large corporations.
          </span>
          <span class="technologies-list__title m-24_bottom">
            The platform integrates 25+ scanning engines supporting 15+ programming languages
          </span>

          <ul class="technologies-list__items media-m-48_bottom">
            <ListTechnologiesItem
              v-for="technology in technologies"
              :key="technology.name"
              v-bind="technology"
              class="technologies-list__item"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'
import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'
import { reviewsStatistics, techStackLanguagesGuardrails } from '@/data/caseGuardrails'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'

import countUp from '@/helpers/countUp'

export default {
  name: 'About',
  components: {
    TextParagraph,
    StatisticsContainer,
    StatisticCard,
    ListTechnologiesItem,
  },

  mixins: [
    IntersectionObserverMixin(
      ['statistics-about-1', 'statistics-about-2', 'statistics-about-3'],
      countUp,
    ),
  ],

  data() {
    const technologies = techStackLanguagesGuardrails

    return {
      reviewsStatistics,
      technologies,
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

.case_review-container {
  background-position: center;
  background-size: cover;
}

.technologies-list {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__title {
    font-size: 17px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 8px;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $bgcolor--white-primary;
    border-radius: 10px;
    width: 102px;
    height: 90px;

    /deep/ .case_technologies-item__tech-icon {
      height: 26px;
    }
  }

  &__item:nth-child(1) {
    grid-column-start: 2;
    grid-column-end: 3;
    @media screen and (max-width: 991px) {
      grid-column-start: inherit;
      grid-column-end: inherit;
    }
  }

  &__item:nth-child(5) {
    display: flex;
    text-align: center;
    grid-column-start: 6;
    grid-column-end: 8;

    & .case_technologies-item__tech-icon {
      display: inline-block;
    }

    @media screen and (max-width: 991px) {
      grid-column-start: inherit;
      grid-column-end: inherit;
    }
  }
}

</style>

<template>
  <section>
    <div class="container_regular m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <TextParagraph>
        Clutch.co is one of the leading platforms whose mission is to provide unbiased reviews and ratings for IT,
        marketing, and business service providers. By providing reliable information, analysis data, and genuine
        reviews, the platform assists companies and business owners in choosing the right partners for a specific
        project or conducting their research and evaluation.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver p-72_bottom m-72_bottom media-m-48_bottom case_review-container"
      :style="{ backgroundImage: `url(${$getMediaFromS3(`/images/Cases/clutch/svg/map-bg-1.svg`)}),
       url(${$getMediaFromS3(`/images/Cases/clutch/svg/map-bg-2.svg`)})` }"
    >
      <div class="container_regular">
        <h2 class="case_title_h2 case_title p-72_top media-p-41_top m-48_bottom media-m-24_bottom">
          Recognized as the Most Trusted Business Reviews Platform
        </h2>
        <div class="m-72_bottom media-m-20_bottom">
          <Picture
            :width="698"
            :height="278"
            file="map"
            alt="map"
            folder="clutch"
            extension="png"
          />
        </div>
        <StatisticsContainer class="m-48_bottom">
          <StatisticCard
            v-for="(review, i) in reviewsStatistics"
            :id="`about-item-${i}`"
            :key="review.description"
            :number="review.number"
            :number-text="review.numberText"
            :name="review.name"
            :number-color="review.numberColor"
            :description="review.description"
            :icon="review.icon"
            section="about"
            :index="i"
          />
        </StatisticsContainer>
        <div
          class="case_cards"
        >
          <div class="case_cards-group">
            <Card
              v-for="(card, i) in clutchAwards"
              :id="`clutch-card-${i}`"
              :key="card.description"
              class="background-color-white"
            >
              <div
                class="case_card-img"
                :style="`width:${card.img.width}px`"
              >
                <Picture
                  :width="card.img.width"
                  :height="card.img.height"
                  :file="card.img.name"
                  :alt="card.img.name || 'Image'"
                  folder="clutch"
                  extension="webp"
                />
              </div>
              <TextParagraph class="m-50_top">
                {{ card.description }}
              </TextParagraph>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import Card from '@/components/Cases/shared/Card'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import countUp from '@/helpers/countUp'
import { clutchAwards, reviewsStatistics } from '@/data/caseClutch'

export default {
  name: 'About',
  components: {
    StatisticCard,
    StatisticsContainer,
    TextParagraph,
    Picture,
    Card,
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
      clutchAwards,
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
    background-size: 550px;
    background-repeat: no-repeat;
    @media screen and (max-width: 945px) {
      background-size: 400px;
    }
  }

  &_cards-group {
    @include grid(repeat(3, 1fr), auto, 24px, 0);
  }

  @media screen and (max-width: 720px) {
    &_cards-group {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }

  &_card{
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding:35px 20px;
    text-align: center;
    &-img {
      height: 120px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>

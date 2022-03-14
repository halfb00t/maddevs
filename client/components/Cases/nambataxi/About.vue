<template>
  <section>
    <div class="container_regular m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <TextParagraph>
        Namba Taxi (now BiTaxi) is a leading ride-hailing service in Bishkek, Kyrgyz Republic. Mad Devs developed
        software for the service from scratch to revolutionise the way people move around in a modern city. The project
        was doubly challenging: we needed to develop complex technological solutions and create user experiences
        engaging enough to make people change their behaviours. It was Mad Devs’ longest-running project so far as we
        worked with Namba Taxi from 2013 to mid-2020. Together, Mad Devs and Namba Taxi achieved the ultimate goal: let
        the residents of Bishkek quickly get around the city with convenience.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver p-66_top p-42_bottom m-96_bottom media-p-65_bottom media-m-48_bottom case_review-container"
      :style="{ backgroundImage: `url(${$getMediaFromS3(`/images/Cases/nambataxi/svg/map-bg-1.svg`)}),
       url(${$getMediaFromS3(`/images/Cases/nambataxi/svg/map-bg-2.svg`)})` }"
    >
      <div class="container_regular case_review">
        <StatisticsContainer
          class="m-24_bottom"
          :grid="4"
        >
          <StatisticCard
            v-for="(about, i) in aboutStatistics"
            :id="`about-item-${i}`"
            :key="about.description"
            v-bind="about"
            tag="p"
            section="about"
            :index="i"
          />
        </StatisticsContainer>
        <div class="case_map-container">
          <img
            v-lazy-load
            :width="616"
            :height="306"
            :data-src="$getMediaFromS3(`/images/Cases/nambataxi/svg/map.svg`)"
            alt="map"
            class="case_image-map"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import countUp from '@/helpers/countUp'
import { aboutStatistics } from '@/data/caseNambaTaxi'

export default {
  name: 'About',
  components: {
    StatisticCard,
    StatisticsContainer,
    TextParagraph,
  },

  mixins: [
    IntersectionObserverMixin(
      ['statistics-about-0', 'statistics-about-1', 'statistics-about-2', 'statistics-about-3'],
      countUp,
    ),
  ],

  data() {
    return {
      aboutStatistics,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_review-container {
    background-position: left center, right top;
    background-size: 550px;
    background-repeat: no-repeat;
    @media screen and (max-width: 945px) {
      background-size: 400px;
    }
  }
  &_review{
    display: flex;
    flex-direction: column;
  }

  &_map-container{
    max-width: 616px;
    align-self: center;
  }

  &_image-map{
    width: 100%;
    height: auto;
    display: block;
  }
  /deep/ &_statistics-item {
    &_description{
      font-size: 17px;
    }
    &_icon{
      margin-bottom: 5px;
    }
  }
}
</style>

<template>
  <section class="case_lido__about m-96_bottom media-m-48_bottom">
    <div class="container_regular m-96_top m-96_bottom media-m-48_bottom">
      <TextParagraph class="case_text-align-center">
        The Lido is a platform that solves the issues with Ethereum staking by facilitating participation with
        any amount of ETH. It is supported by a consortium of industry leaders.
      </TextParagraph>
    </div>
    <div class="container_full background-color-button-blue p-48_bottom media-p-24_bottom">
      <div class="container_regular">
        <h2 class="case_title_h2 case_title p-62_top media-p-41_top m-48_bottom media-m-24_bottom">
          Liquid Ethereum Staging
        </h2>
        <TextParagraph
          color="white"
          class="case_text-align-center"
        >
          Lido lets you stake ETH to earn daily rewards. Stake any amount and grow your balance with DeFi.
        </TextParagraph>
        <StatisticsContainer
          class="m-72_top"
        >
          <StatisticsItem
            v-for="(statisticsItem, i) in statisticsLido"
            :id="`about-item-${i}`"
            :key="statisticsItem.title"
            v-bind="statisticsItem"
          />
        </StatisticsContainer>
        <LottieMad
          class="case_lottie"
          height="423px"
          :lottie-link="$getMediaFromS3(`/images/Cases/lido/lottie/achievements.json`)"
          :autoplay="true"
        />
        <div
          class="case_lido__about-alert m-12_top"
        >
          <TextParagraph
            color="#363636"
            class="case_text-align-center"
          >
            This data is current as of Jule 2022. Please, visit the
            <a
              href="https://lido.fi/"
              target="_blank"
            >
              Lido website
            </a>
            to see the actual APR rate.
          </TextParagraph>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticsItem from '@/components/Cases/shared/StatisticsItem'
import { statisticsLido } from '@/data/caseLido'
// import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
//
// import countUp from '@/helpers/countUp'

export default {
  name: 'About',
  components: {
    TextParagraph,
    LottieMad,
    StatisticsContainer,
    StatisticsItem,
  },

  // mixins: [
  //   IntersectionObserverMixin(
  //     ['statistics-about-1', 'statistics-about-2'],
  //     countUp,
  //   ),
  // ],

  data() {
    return {
      statisticsLido,
    }
  },
}
</script>
<style lang="scss" scoped>
.case {
  &_title {
    text-align: center;
  }
  &_lido__about {
    & .case_title {
      color: $text-color--white-primary;
    }

    ::v-deep .case_statistics-item {
      &:first-child {
        padding-left: 0;
        padding-right: 25.5px;
      }
      &:nth-child(2) {
        border-left: 1px solid $border-color--white-03-opacity;
        border-right: 1px solid $border-color--white-03-opacity;
      }
    }

    ::v-deep .case_statistics-item_number {
      color: $text-color--white-primary;
      font-size: 36px;
      line-height: 130%;
    }

    ::v-deep .case_statistics-item_title {
      text-transform: capitalize !important;
      color: $text-color--white-primary;
      margin-bottom: 16px;
    }

    &-alert {
      background: rgba(255, 255, 255, 0.4);
      border-radius: 5px;
      padding: 10.5px 0;

      p {
        @include font('Inter', 14px, 400);
        line-height: 166%;
        letter-spacing: -0.035em;
        color: #363636;

        a {
          color: #363636;
          text-decoration: underline;
        }
      }
    }
  }
}
::v-deep .case_statistics-item:not(:first-child) .case_statistics-item_description {
  padding: 0 48px;
  @media screen and (max-width: 820px) {
    padding: 0;
  }
}
</style>

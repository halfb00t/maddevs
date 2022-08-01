<template>
  <section class="case_lido__about m-96_bottom media-m-48_bottom">
    <div class="container_regular m-96_top m-96_bottom media-m-48_bottom media-m-48_top">
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
          class="case_text-align-center case_lido__about-subtitle"
        >
          Lido lets you stake ETH to earn daily rewards. Stake any amount and grow your balance with DeFi.
        </TextParagraph>
        <StatisticsContainer
          class="m-72_top media-m-62_top"
        >
          <StatisticCard
            v-for="(statisticsItem, i) in statisticsLido"
            :id="`about-item-${i}`"
            :key="statisticsItem.description"
            :number="statisticsItem.number"
            :number-text="statisticsItem.numberText"
            :name="statisticsItem.name"
            :header-text="statisticsItem.headerText"
            :header-text-color="statisticsItem.headerTextColor"
            :without-space-before-number="statisticsItem.withoutSpaceBeforeNumber"
            :without-space-after-number="statisticsItem.withoutSpaceAfterNumber"
            :text-before-number="statisticsItem.textBeforeNumber"
            :has-space-before-number="false"
            :has-space-after-number="false"
            :number-color="statisticsItem.numberColor"
            section="about"
            :index="i"
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
    <div class="container_regular m-96_top media-m-72_top">
      <TextParagraph class="m-24_bottom">
        The goal of the Lido platform is to remove the incentives of ETH 2.0 by allowing people to stake their
        ETH while also participating in on-chain lending. This will enable them to earn additional yield and
        improve the security of the ETH network.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        When the users stake  ETH on the Ethereum beacon chain, they will receive a token called stETH, which
        represents  ETH on the chain on a 1:1 basis. This bridge allows people to earn rewards from both the old and new ETH 2.0 blockchains.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        Lido works with Ethereum 2.0, Solana, Kusama and Polygon networks.
      </TextParagraph>
      <TextParagraph>
        Despite the competition from other platforms, such as Stkr and Rocketpool, the team at Lido has maintained its dominant position.
      </TextParagraph>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'
import { statisticsLido } from '@/data/caseLido'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import countUp from '@/helpers/countUp'

export default {
  name: 'About',
  components: {
    TextParagraph,
    LottieMad,
    StatisticsContainer,
    StatisticCard,
  },

  mixins: [
    IntersectionObserverMixin(
      ['statistics-about-1', 'statistics-about-2'],
      countUp,
    ),
  ],

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

      @media screen and (max-width: 400px) {
        font-size: 20.25px;
        font-weight: 400;
        line-height: 135%;
        letter-spacing: -1px;
      }
    }

    ::v-deep .case_statistics-container {
      @media screen and (max-width: 940px) {
        grid-template-columns: repeat(1, 250px) !important;
        justify-content: center;
      }
    }

    ::v-deep .case_statistics-item {
      gap: 12px;
      &_number {
        border-right: none;
      }

      &:first-child {
        padding-left: 0;
        padding-right: 25.5px;
      }
      &:nth-child(2) {
        border-left: 1px solid $border-color--white-03-opacity;
        border-right: 1px solid $border-color--white-03-opacity;
      }

      @media screen and (max-width: 940px) {
        padding: 20px 0;

        &:first-child {
          padding-left: 0;
          padding-right: 0;
        }

        &:nth-child(2) {
          position: relative;
          border-left: 0;
          border-right: 0;

          &:before,
          &:after {
            content: '';
            width: 79px;
            height: 1px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color: $border-color--white-03-opacity;
          }

          &:before {
            top: 0;
          }

          &:after {
            bottom: 0;
          }

          &_title,
          &_description {
            font-size: 17px;
          }

          &_title  {
            margin-bottom: 13px;
          }

          &_number {
            margin-bottom: 6px;
            font-size: 36px;
            line-height: 130%;
          }
        }
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
      padding: 10.5px 20px;

      p {
        @include font('Inter', 14px, 400);
        line-height: 166%;
        letter-spacing: -0.035em;
        color: #363636;

        @media screen and (max-width: 400px){
          font-size: 17px;
        }

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

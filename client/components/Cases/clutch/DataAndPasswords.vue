<template>
  <section class="p-96_bottom p-media-p-48_bottom">
    <div class="container_regular m-96_bottom media-m-48_bottom">
      <h2 class="case_title_h2 m-12_bottom media-m-12_bottom">
        Securely migrated data and passwords
      </h2>
      <TextParagraph class="m-12_bottom">
        Successful and secure data migration was vital as we were moving to a new architecture. The Mad Devs team
        meticulously tested each step so that tasks are performed seamlessly for users and the website’s performance
        under its content management framework isn’t affected.
      </TextParagraph>
      <TextParagraph>
        We have implemented a new password algorithm and integrated it into Django. We have done many tests to ensure
        the quality of the password transfer.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-blue-grey p-48_top p-48_bottom media-p-41_top media-p-41_bottom"
    >
      <div class="container_regular">
        <h2 class="case_title_h2 case_title m-21_bottom media-m-10_bottom">
          Website speed boost
        </h2>
        <TextParagraph
          class="case_text m-32_bottom media-m-24_bottom"
        >
          Website speed is a crucial indicator of successful project development. A slow website negatively affects
          users’ experience and results in a lower search ranking. From June of 2019 to the present, Mad Devs has
          created faster pages for Clutch.co.
        </TextParagraph>
        <div class="case_cards case_cards-header m-12_bottom">
          <div class="case_card-header">
            <TextParagraph class="case_card-header_text">
              <span>Page</span>
            </TextParagraph>
            <TextParagraph class="case_card-header_text">
              <span>Directory</span>
            </TextParagraph>
          </div>
          <div class="case_card-header">
            <TextParagraph class="case_card-header_text">
              <span>URL</span>
            </TextParagraph>
            <TextParagraph class="case_card-header_text">
              <span>https://clutch.co/jp/it-services</span>
            </TextParagraph>
          </div>
          <div class="case_card-header">
            <TextParagraph class="case_card-header_text">
              <span>Location, connection type</span>
            </TextParagraph>
            <TextParagraph class="case_card-header_text">
              <span>San Francisco, CA - Chrome - Cable</span>
            </TextParagraph>
          </div>
        </div>
        <div class="case_cards-body m-78_bottom media-m-48_bottom">
          <div class="case_card-body">
            <div>Date</div>
            <div>First Contentful Paint</div>
            <div>Speed Index</div>
            <div>Last Painted Hero</div>
            <div>Full Load Time</div>
            <div>Bytes</div>
          </div>
          <div class="case_card-body">
            <div>June 8th, 2020</div>
            <div>1.233s</div>
            <div>1.734s</div>
            <div>2.200s</div>
            <div>4.586s</div>
            <div>459 KB</div>
          </div>
          <div class="case_card-body">
            <div>Sept. 30th, 2020</div>
            <div>1.167s</div>
            <div>1.535s</div>
            <div>1.845s</div>
            <div>3.457s</div>
            <div>470 KB</div>
          </div>
          <div class="case_card-body">
            <div>Aug. 5th, 2021</div>
            <div>1.149s</div>
            <div>1.237s</div>
            <div>1.385s</div>
            <div>3.350s</div>
            <div>659 KB</div>
          </div>
        </div>
        <StatisticsContainer class="m-48_bottom">
          <StatisticCard
            v-for="(review, i) in speedStatistics"
            :id="`speed-item-${i}`"
            :key="review.headerText"
            v-bind="review"
            section="speed"
            :index="i"
          />
        </StatisticsContainer>
        <TextParagraph
          class="case_text"
        >
          At first glance, the new website pages look identical to the old versions. As Clutch.co already had an
          established group of users, our goal was to build new architecture without interfering with the user
          experience.
        </TextParagraph>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'
import { speedStatistics } from '@/data/caseClutch'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import countDown from '@/helpers/countDown'

export default {
  name: 'DataAndPasswords',
  components: {
    TextParagraph,
    StatisticsContainer,
    StatisticCard,
  },

  mixins: [
    IntersectionObserverMixin(
      ['statistics-speed-0', 'statistics-speed-1', 'statistics-speed-2'],
      countDown,
    ),
  ],

  data() {
    return {
      speedStatistics,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {

  &_title, &_text {
    text-align: center;
    color: $text-color--white;
  }

  &_cards {
    &-header {
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      @include grid(repeat(3, 1fr), auto, 0, 0);
    }

    &-body {
      border-radius: 0 0 10px 10px;
      overflow: hidden;
      @include grid(repeat(1, 1fr), auto, 0, 0);
    }
  }

  &_card {
    &-header {
      background-color: #3094AB;

      &:nth-child(2) {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-left: 1px solid rgba(255, 255, 255, 0.2);
      }

      &_text {
        position: relative;
        text-align: center;
        height: 46px;
        @include title($text-color--white, 14px, 166%);
        font-weight: 400;

        & span {
          min-width: 180px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        &:first-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }

    &-body {
      background-color: rgba(48, 148, 171, 0.3);
      text-align: center;
      align-content: center;
      height: 56px;
      @include grid(repeat(6, 1fr), auto, 0, 0);
      @include title($text-color--white, 12px, 166%);
      font-weight: 400;

      &:last-child {
        margin-top: 12px;
        background-color: #62BA56;
        font-weight: 700;
        height: 43px;
        font-size: 14px;
      }

      &:first-child {
        height: 77px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        font-weight: 500;
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 769px) {
    &_cards-header {
      @include grid(repeat(1, 1fr), auto, 0, 2px);
    }
    &_cards-body {
      @include grid(repeat(4, 1fr), auto, 0, 0);
    }
    &_card {
      &-header {
        &_text {
          height: 53px;
          margin: 0 30px;
        }
      }

      &-body {
        @include grid(repeat(1, 1fr), auto, 0, 2px);
        background-color: transparent;
        font-size: 10px;
        height: auto;

        & div {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(48, 148, 171, 0.3);
          height: 69px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 10px;

        }

        &:last-child {
          font-size: 10px;
          height: auto;
          background-color: transparent;
          margin-top: 0;

          & div {
            margin-left: 5px;
            background-color: #62BA56;
            border: none;
          }
        }

        &:first-child {
          height: auto;
          border: none;

          & div {
            justify-content: flex-start;
            text-align: left;
          }
        }
      }
    }
  }

  /deep/ &_statistics-item {
    border-right: 1px solid $border-color--white;

    &_number {
      border: none;
      margin-left: 20px;
      @include font($text-color--black, 36px, 600);

      & span {
        position: relative;

        &:before {
          content: '≃';
          width: 28px;
          height: 20px;
          line-height: 0;
          position: absolute;
          top: 22px;
          left: -35px;
        }
      }
    }

    &:last-child {
      border: none;
    }

    @media screen and (max-width: 820px) {
      &_number {
        padding: 0
      }
      border: none;
    }
  }
}
</style>

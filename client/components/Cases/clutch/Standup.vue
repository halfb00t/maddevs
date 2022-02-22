<template>
  <section>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Automated daily standups
      </h3>
      <TextParagraph class="m-24_bottom">
        Comedian is a Slack bot that enables all stakeholders to track the developers’ daily progress on tasks. Every
        day, Mad Devs team members provide written answers to the following basic questions:
      </TextParagraph>
      <TextParagraph class="case_standup-question m-12_bottom">
        What did I do yesterday?
      </TextParagraph>
      <TextParagraph class="case_standup-question m-12_bottom">
        What will I do today?
      </TextParagraph>
      <TextParagraph class="case_standup-question m-24_bottom">
        What problems do I have?
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        This solution enables Clutch.co to clearly understand what each team member is doing and quickly solve emerging
        problems.
      </TextParagraph>
    </div>
    <div class="container_middle case_img-wrap m-48_bottom">
      <Picture
        :width="1026"
        :height="554"
        :lazy="true"
        folder="clutch"
        file="standup"
        extension="png"
        alt="Standup"
      />
    </div>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Objectives & Key Results
      </h3>
      <TextParagraph class="m-12_bottom">
        Objectives & Key Results is a method that unites everyone and puts the focus on achieving the desired result.
        Regularly, project managers broadcast OKRs during weekly meetings and within automatically scheduled Slack
        notifications.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        OKRs show whether the team is achieving established goals on time and ensure frequent evaluations of progress.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-blue-grey p-56_top p-56_bottom media-p-32_top media-p-32_bottom m-48_bottom"
    >
      <div class="container_regular">
        <h4 class="case_title m-21_bottom media-m-10_bottom">
          Clutch Go Layer
        </h4>
        <div class="case_cards-body">
          <div class="case_card-body">
            <div class="case_card-body-header-1">
              OKR1: Optimized performance of the CGL Directory pages
            </div>
            <div class="case_card-body-header-2">
              Status (Done / In <br> Progress, %)
            </div>
          </div>
          <div class="case_card-body">
            <div class="case_card-body-1">
              <span>KR 1</span> First Contentful Paint less 1 sec
            </div>
            <div class="case_card-body-2">
              <span>Done</span>
            </div>
          </div>
          <div class="case_card-body">
            <div class="case_card-body-1">
              <span>KR 2</span> Speed Index ~ 1 sec
            </div>
            <div class="case_card-body-2">
              <span>Done</span>
            </div>
          </div>
          <div class="case_card-body">
            <div class="case_card-body-1">
              <span>KR 3</span> Last Painted Hero ~ 1sec
            </div>
            <div class="case_card-body-2">
              <span>Done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container_regular m-96_bottom media-m-48_bottom">
      <h3 class="case_title_h3 m-12_bottom">
        Reports
      </h3>
      <TextParagraph>
        Accurate reporting is a crucial element in the fostering of quality communication in the outstaffing model.
        In the Clutch.co project, we provide sprint demos and monthly reports. The monthly report is essentially
        a document with a detailed description of all tasks accomplished within a specified timeframe. It also describes
        the roadmap. Sprint reports describe workload per person and their story points, velocity and sprint burnout,
        number of tests, and the potential risks that might lower the team’s productivity levels.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'Standup',
  components: {
    TextParagraph,
    Picture,
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_title {
    @include title($text-color--white, 24px, 166%);
    font-weight: 500;
  }

  &_standup-question {
    font-weight: 700;
  }

  &_img-wrap {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
  }

  &_cards {
    &-body {
      border-radius: 10px 10px 10px 10px;
      overflow: hidden;
      @include grid(repeat(1, 1fr), auto, 1px, 1px);
    }
  }

  &_card {
    &-body {
      background-color: rgba(48, 148, 171, 0.3);
      text-align: center;
      align-content: center;
      height: 90px;
      @include grid(repeat(3, 1fr), auto, 1px, 1px);
      @include default-text($text-color--white, 16px, 166%, 0, 600);
      font-weight: 600;

      @media screen and (max-width: 820px) {
        height: 56px;
        font-size: 10px;
      }

      &-2 {
        & span {
          text-transform: uppercase;
          padding: 3px 49px;
          background-color: #37B662;
          border-radius: 5px;
          @media screen and (max-width: 820px) {
            padding: 3px 20px;
          }
        }
      }

      &-header-1 {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      &-header-1,&-header-2{
        padding: 29px 36px 16px;
        @media screen and (max-width: 875px) {
          padding: 7px 14px;
        }
      }

      &-1 {
        font-weight: 400;
        padding: 0 100px;
        text-align: left;
        grid-column-start: 1;
        grid-column-end: 3;
        @media screen and (max-width: 820px) {
          padding: 0 0 0 40px;
        }

        & span {
          font-weight: 700;
          position: relative;

          &:before {
            content: '✔';
            position: absolute;
            left: -37px;
            top: 0;
            width: 17px;
            height: 17px;
            border-radius: 3px;
            background-color: $bgcolor--white;
            outline: none;
            @media screen and (max-width: 820px) {
              left: -21px;
              top: 2px;
              width: 10px;
              height: 10px;
            }
          }

          &:after {
            content: '✔';
            position: absolute;
            top: -1px;
            left: -34px;
            color: rgba(48, 148, 171, 0.8);
            font-size: 12px;
            @media screen and (max-width: 820px) {
              left: -19px;
              top: 1px;
              font-size: 6px;
            }
          }
        }
      }

      &:first-child {
        height: 90px;
        padding: 0 20px;
        margin-bottom: 12px;
        background-color: $bgcolor--steel-blue;
        font-weight: 600;
        font-size: 18px;
        text-align: left;
        @media screen and (max-width: 820px) {
          height: 69px;
          padding: 0;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

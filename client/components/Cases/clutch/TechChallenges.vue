<template>
  <section>
    <section
      class="container_regular"
    >
      <h2 class="case_title_h2 m-12_bottom media-m-24_bottom">
        Great technical challenges come <br> with rapid growth
      </h2>
      <TextParagraph class="m-12_bottom">
        Clutch’s customer base and website traffic are doubling every year. With great growth come great technical
        challenges. The stable solution that worked smoothly for a small user base was no longer enough to sustain the
        website traffic of 800K unique users per month. The slow, monolithic architecture had become an obstacle to
        growth.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        So, to continue improving the way that companies look for vendors, Clutch decided to bring changes to the current
        technological stack and then build a faster, better platform with new software architecture.
      </TextParagraph>
    </section>
    <section class="container_full background-color-blue-grey p-48_top p-48_bottom m-96_bottom media-m-48_bottom">
      <div
        class="container_regular m-24_bottom"
      >
        <div class="case_cards-group">
          <Card
            v-for="(card, i) in techChallenges"
            :id="`techClutch-card-${i}`"
            :key="card.title"
            class="case_card"
          >
            <h3 class="case_title_h4 case_card-title m-10_bottom media-m-8_bottom">
              {{ card.title }}
            </h3>
            <TextParagraph
              color="#ffffff"
              class="m-10_bottom"
            >
              {{ card.description }}
            </TextParagraph>
            <div class="case_card-img">
              <Picture
                v-if="card.img"
                :width="396"
                :height="200"
                :file="card.img"
                :alt="card.img || 'Image'"
                folder="clutch"
                extension="png"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import Card from '@/components/Cases/shared/Card'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'
import { idTechChallenges, techChallenges } from '@/data/caseClutch'

export default {
  name: 'TechChallenges',
  components: {
    TextParagraph,
    Card,
    Picture,
  },

  mixins: [
    IntersectionObserverMixin(
      idTechChallenges,
      setBackground,
    ),
  ],

  data() {
    return {
      techChallenges,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_card {
    padding-bottom: 0;
    background: rgba(48, 148, 171, 0.3);
    &:nth-child(3){
      text-align: center;
      grid-column-start: span 2;
      .case_card-img{
        padding: 0 30px;
      }
    }
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 23px, 23px);
  }

  &_card-title {
    color: $text-color--white;
  }

  &_card-img {
    min-width: 313px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 990px) {
      min-width: 200px
    }
  }

  @media screen and (max-width: 720px) {
    & &_card {
      grid-column-start: span 1;
      &:nth-child(3) {
        text-align: left;
      }
    }
    &_cards-group {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }
}
</style>

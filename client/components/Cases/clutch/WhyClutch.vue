<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Why do top firms & decision <br>
        makers trust Clutch?
      </h2>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Clutch's founder created the platform to make it easy to perform credible and accessible market research. They
        saw a challenge in how advertorials and superficial data distorted businesses’ buying decisions.
      </TextParagraph>
      <div
        class="p-96_bottom media-p-48_bottom"
      >
        <ListNumberedBox class="case_whyclutch-item">
          <ListNumberedItemBox
            v-for="(solution, i) in whyClutch"
            :id="`whyClutch-item-${i}`"
            :key="`whyClutch-item-${i}`"
            :data-background="solution.background"
          >
            {{ solution.text }}
          </ListNumberedItemBox>
        </ListNumberedBox>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'
import { idWhyClutch, whyClutch } from '@/data/caseClutch'

export default {
  name: 'WhyClutch',
  components: {
    TextParagraph,
    ListNumberedBox,
    ListNumberedItemBox,
  },

  mixins: [
    IntersectionObserverMixin(
      idWhyClutch,
      setBackground,
    ),
  ],

  data() {
    return {
      whyClutch,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_title_h2 br{
    @media screen and (max-width: 390px) {
      display: none;
    }
  }

  &_whyclutch-item{
    /deep/ .case_list-numbered_item {
      color: $text-color--white;
      background-color: $bgcolor--grey-cases;
      transition: 1s;
      @media screen and (max-width: 768px) {
        background-color: $bgcolor--grey-cases;
      }
    }
  }

}
</style>

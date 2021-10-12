<template>
  <section>
    <div class="container_regular media-background-color-gray-lightened">
      <h2 class="case_title_h2 media-p-48_top m-16_bottom media-m-12_bottom">
        Challenges & solutions
      </h2>
      <TextParagraph class="m-16_bottom media-m-24_bottom">
        The project’s two main ambitions were low energy use and high load capacity. To pursue the former, we engineered
        a device that could take photos and send them to the server every three seconds while using under one watt of
        electricity. A high-load service we were simultaneously building, in turn, needed to save and transmit images to
        the user app and the customer’s website. The general flow of the system went like this:
      </TextParagraph>
      <div
        class="m-48_bottom media-m-24_bottom"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <LottieMad
          id="challenges-solutions"
          class="case_lottie"
          height="570px"
          :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/challenges-solutions.json`)"
          @animCreated="handleAnimation"
        />
      </div>
      <div
        class="p-80_bottom media-p-32_bottom"
      >
        <ListNumberedBox>
          <ListNumberedItemBox
            v-for="(solution, i) in challengesAndSolutions"
            :id="`solution-item-${i}`"
            :key="solution.text"
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
import { challengesAndSolutions, idSolutionsList } from '@/data/caseCityCam'
import LottieMad from '@/components/shared/LottieMad'
import playLottie from '@/helpers/playLottie'

export default {
  name: 'ChallengesAndSolutions',
  components: {
    TextParagraph,
    ListNumberedBox,
    ListNumberedItemBox,
    LottieMad,
  },

  mixins: [
    IntersectionObserverMixin(
      idSolutionsList,
      setBackground,
    ),
  ],

  data() {
    return {
      challengesAndSolutions,
    }
  },

  methods: {
    handleAnimation(animation) {
      playLottie(animation, 'challenges-solutions')
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  /deep/ &_list-numbered_item {
    background-color: $bgcolor--grey-cases;
    transition: 1s;
    @media screen and (max-width: 768px) {
      background-color: $bgcolor--grey-cases;
    }
  }
}
</style>

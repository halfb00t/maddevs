<template>
  <section>
    <div class="container_regular media-background-color-gray-lightened">
      <h2 class="case_title_h2 p-56_top media-p-48_top m-16_bottom media-m-12_bottom">
        Challenges & solutions
      </h2>
      <TextParagraph class="m-16_bottom media-m-24_bottom">
        The project’s two main ambitions were low energy use and high load capacity. To pursue the former, we engineered
        a device that could take photos and send them to the server every three seconds while using under one watt of
        electricity. A high-load service we were simultaneously building, in turn, needed to save and transmit images to
        the user app and the customer’s website. The general flow of the system went like this:
      </TextParagraph>
      <div
        class="m-24_bottom"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <Lottie
          id="challenges-solutions"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
      <div
        class="p-118_bottom media-p-48_bottom"
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
import Lottie from 'vue-lottie/src/lottie.vue'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import animationData from '@/assets/lottie/citycam/challenges-solutions.json'
import playLottieMixin from '@/mixins/playLottieMixin'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'
import { challengesAndSolutions, idSolutionsList } from '@/data/caseCityCam'

export default {
  name: 'ChallengesAndSolutions',
  components: {
    TextParagraph,
    Lottie,
    ListNumberedBox,
    ListNumberedItemBox,
  },

  mixins: [
    playLottieMixin('challenges-solutions', {
      animationData,
      autoplay: false,
      loop: false,
    }),
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
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }
}
</style>

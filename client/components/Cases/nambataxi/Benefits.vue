<template>
  <section
    class="container_regular m-96_bottom media-m-48_bottom"
  >
    <h2
      class="case_title_h2 m-12_bottom "
    >
      Why the city needed a better taxi service
    </h2>
    <TextParagraph class="m-12_bottom">
      Automation of the driver-passenger interactions is what Namba Taxi decided to pursue. Mad Devs’ mission is to
      automate as many interactions as possible: we want to let machines do everything that they can do better than
      humans. Namba Taxi wanted an automated, next-generation, Uber-like transportation solution. We undertook the
      challenge of developing this software. We undertook the challenge of developing this software and started in 2013.
    </TextParagraph>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      Automation of the driver-passenger interactions is what Namba Taxi decided to pursue. Mad Devs’ mission is to
      automate as many interactions as possible: we want to let machines do everything that they can do better than
      humans. Namba Taxi wanted an automated, next-generation, Uber-like transportation solution. We undertook the
      challenge of developing this software. We undertook the challenge of developing this software and started in 2013.
    </TextParagraph>
    <h3
      class="case_title_h2 m-50_bottom media-m-12_bottom"
    >
      Benefits of Namba Taxi
    </h3>
    <ParallaxCards
      :data-cards="nambaBenefits"
    />
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { nambaBenefits } from '@/data/caseNambaTaxi'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

export default {
  name: 'Benefits',
  components: {
    ParallaxCards,
    TextParagraph,

  },

  data() {
    return {
      nambaBenefits,
    }
  },
}

</script>

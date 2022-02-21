<template>
  <section
    class="container_regular m-96_bottom media-m-48_bottom"
  >
    <h3
      class="case_title_h2 m-12_bottom"
    >
      Outstaffing to multi-location teams
    </h3>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      The customer’s development team is fully distributed, with the head office in Washington, DC, and staff based in
      Poland and Ukraine. Mad Devs stepped in as an outstaffing company to help Clutch.co reach its desired goals on
      time. Our software and DevOps engineers, project managers, and other multi-location teams operate under the CTO’s
      direct supervision.
    </TextParagraph>
    <h3
      class="case_title_h2 m-48_bottom media-m-24_bottom"
    >
      Key results achieved by the Clutch.co and Mad Devs collaboration
    </h3>
    <ParallaxCards
      :data-cards="clutchResults"
      :start-slice="4"
    />
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { clutchResults } from '@/data/caseClutch'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

export default {
  name: 'OutStuffing',
  components: {
    ParallaxCards,
    TextParagraph,
  },

  data() {
    return {
      clutchResults,
    }
  },
}

</script>

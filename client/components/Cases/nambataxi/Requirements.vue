<template>
  <section
    class="container_regular"
  >
    <h2
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      How we did it: Requirements and limitations
    </h2>
    <TextParagraph
      class="m-24_bottom"
    >
      Software requirements were prepared in close collaboration with the customer and with emphasis on business goals.
      Our rule is to prioritise end users’ experience: we focus on how our product will be helpful instead of focusing
      on how convenient it will be for us to develop it. Discussions and analysis helped identify eight main
      requirements.
    </TextParagraph>
    <div class="m-48_bottom">
      <ParallaxCards
        :data-cards="nambaRequirements"
        :start-slice="4"
      />
    </div>
    <TextParagraph
      class="m-96_bottom media-m-48_bottom"
    >
      Identifying limitations was the next step. Internet service was expensive in 2013, so we needed a highly efficient
      system that delivers proper performance with as little mobile traffic as possible. The goal was to reduce the
      costs for the drivers and the passengers who use the mobile app. We also kept in mind the customer’s business
      costs: server resources, for instance, were limited.
    </TextParagraph>
    <TextQuote
      class="m-auto m-96_bottom media-m-48_bottom"
      author="Oleg Puzanov, CSO at Mad Devs"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      We chose the iterative approach that delivers a complete, functional product for a specific business process after
      each iteration.
    </TextQuote>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { nambaRequirements } from '@/data/caseNambaTaxi'
import TextQuote from '@/components/Cases/shared/TextQuote'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

export default {
  name: 'Requirements',
  components: {
    ParallaxCards,
    TextParagraph,
    TextQuote,
  },

  data() {
    return {
      nambaRequirements,
    }
  },
}

</script>

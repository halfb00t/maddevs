<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Phase 1: Fixing database outages
    </h2>
    <ColoredCards
      :cards-data="fixingDatabaseCards"
      grid-type="two-two"
    />
    <TextQuoteBox
      class="m-48_top m-96_bottom media-m-24_top media-m-72_bottom m-auto"
      author="Andrew Sapozhnikov, Head of DevOps"
    >
      “We needed better monitoring and metrics collection to detect the true reason for the outage. We don’t sweep these things under the rug. We go for root causes.”
    </TextQuoteBox>
    <h3
      class="
      case_title_h3
      m-24_bottom
      media-m-12_bottom"
    >
      Solution
    </h3>
    <div class="case_solution-cards">
      <CardTechSolution
        v-for="solution in techSolutions"
        v-bind="solution"
        :key="solution.icon"
        folder="veeqo"
      />
    </div>
    <TextParagraph class="m-48_top m-48_bottom media-m-24_bottom">
      As a result, we spent $180 on launching PgBouncers on two c4.large instances behind NLB and saved about 10X  the sum in the customer’s monthly costs by: Freeing up about 40 GB of RAM, Postponing the need to upgrade the RDS instance until about 6 months later.
    </TextParagraph>
    <img
      v-lazy-load
      :data-src="$getMediaFromS3('/images/Cases/veeqo/svg/pg-bouncer-diagram.svg')"
      width="818"
      height="560"
      alt="PgBouncers Diagram."
      class="case_pg-bouncer-diagram m-48_bottom"
    >
    <h3 class="case_title_h2 case_title-result m-48_bottom media-m-41_bottom">
      Result
    </h3>
    <FixingDatabaseOutagesResult class="m-96_bottom media-m-48_bottom" />
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import FixingDatabaseOutagesResult from '@/components/Cases/veeqo/FixingDatabaseOutagesResult'
import { techSolutions, fixingDatabaseCards } from '@/data/caseVeeqo'
import ColoredCards from '@/components/Cases/shared/ColoredCards'

export default {
  name: 'PhaseFixingDatabaseOutages',
  components: {
    ColoredCards,
    TextParagraph,
    TextQuoteBox,
    CardTechSolution,
    FixingDatabaseOutagesResult,
  },

  data() {
    return {
      techSolutions,
      fixingDatabaseCards,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 25px, 0);
  }

  &_solution-cards {
    @include grid(repeat(2, 1fr), auto, 25px, 25px);
  }

  &_title-result {
    text-align: center;
  }

  &_pg-bouncer-diagram {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 880px) {
    &_cards-container,
    &_solution-cards {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }

    &_title-result {
      text-align: left;
    }
  }
}
</style>

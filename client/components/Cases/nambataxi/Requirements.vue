<template>
  <section
    class="container_regular"
  >
    <h3
      v-prlx="animationRequirementsText"
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      How we did it: Requirements and limitations
    </h3>
    <TextParagraph
      v-prlx="animationRequirementsText"
      class="m-24_bottom"
    >
      Software requirements were prepared in close collaboration with the customer and with emphasis on business goals.
      Our rule is to prioritise end users’ experience: we focus on how our product will be helpful instead of focusing
      on how convenient it will be for us to develop it. Discussions and analysis helped identify eight main
      requirements.
    </TextParagraph>
    <div class="case_cards-container">
      <div class="case_column">
        <CardTechSolution
          v-for="result in nambaRequirements.slice(0, 4)"
          v-bind="result"
          :key="`namba-${result.icon}`"
          folder="nambataxi"
        />
      </div>
      <div
        v-prlx="animationRequirementsCards"
        class="case_column"
      >
        <CardTechSolution
          v-for="result in nambaRequirements.slice(4, 8)"
          v-bind="result"
          :key="`namba-${result.icon}`"
          folder="nambataxi"
        />
      </div>
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
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import { nambaRequirements } from '@/data/caseNambaTaxi'
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'Requirements',
  components: {
    TextParagraph,
    CardTechSolution,
    TextQuote,
  },

  data() {
    return {
      nambaRequirements,
      animationRequirementsText: {
        direction: 'y',
        speed: 0.2,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -25,
          max: 25,
        },

        mobileMaxWidth: 977,
      },

      animationRequirementsCards: {
        direction: 'y',
        speed: 0.2,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -28,
          max: 25,
        },

        mobileMaxWidth: 977,
      },
    }
  },
}

</script>

<style scoped lang="scss">
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_column {
    @include grid(repeat(1, 1fr), repeat(2, minmax(min-content, max-content)), 0, 24px);

    ::v-deep {
      .card-content {
        align-self: start;
      }
    }
  }

  @media screen and (max-width: 976px) {
    &_cards-container {
      margin-bottom: 96px;
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }

    &_column {
      grid-row-gap: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    &_cards-container {
      margin-bottom: 48px;
    }
  }
}
</style>

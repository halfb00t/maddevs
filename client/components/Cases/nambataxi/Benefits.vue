<template>
  <section
    class="container_regular"
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
      v-prlx="animationSettingsTitle"
      class="case_title_h2 m-50_bottom media-m-12_bottom"
    >
      Benefits of Namba Taxi
    </h3>
    <div class="case_cards-container">
      <div class="case_column">
        <CardTechSolution
          v-for="result in nambaBenefits.slice(0, 2)"
          v-bind="result"
          :key="result.icon"
          folder="nambataxi"
        />
      </div>
      <div
        v-prlx="animationSettingsCards"
        class="case_column"
      >
        <CardTechSolution
          v-for="result in nambaBenefits.slice(2, 5)"
          v-bind="result"
          :key="result.icon"
          folder="nambataxi"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import { nambaBenefits } from '@/data/caseNambaTaxi'

export default {
  name: 'Benefits',
  components: {
    TextParagraph,
    CardTechSolution,

  },

  data() {
    return {
      nambaBenefits,
      animationSettingsTitle: {
        direction: 'y',
        speed: 0.2,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -200,
          max: 60,
        },

        mobileMaxWidth: 977,
      },

      animationSettingsCards: {
        direction: 'y',
        speed: 0.5,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -408,
          max: 84,
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
    margin-bottom: -250px;
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

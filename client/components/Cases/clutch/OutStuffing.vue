<template>
  <section
    class="container_regular"
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
      v-prlx="animationSettingsTitle"
      class="case_title_h2 m-48_bottom media-m-24_bottom"
    >
      Key results achieved by the Clutch.co and Mad Devs collaboration
    </h3>
    <div class="case_cards-container m-96_bottom media-m-48_bottom">
      <div class="case_column">
        <CardTechSolution
          v-for="result in clutchResults.slice(0, 4)"
          v-bind="result"
          :key="result.icon"
          folder="clutch"
        />
      </div>
      <div
        v-prlx="animationSettingsCards"
        class="case_column"
      >
        <CardTechSolution
          v-for="result in clutchResults.slice(4, 8)"
          v-bind="result"
          :key="result.icon"
          folder="clutch"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { clutchResults } from '@/data/caseClutch'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'

export default {
  name: 'OutStuffing',
  components: {
    TextParagraph,
    CardTechSolution,

  },

  data() {
    return {
      clutchResults,
      animationSettingsImg: {
        direction: 'x',
        speed: 0.2,
        fromBottom: true,
        reverse: true,
        mobileMaxWidth: 991,
      },

      animationSettingsTitle: {
        speed: 0.05,
        reverse: true,
        limit: {
          min: -55,
          max: 55,
        },

        mobileMaxWidth: 991,
      },

      animationSettingsCards: {
        reverse: true,
        limit: {
          min: -55,
          max: 55,
        },

        mobileMaxWidth: 991,
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
    @include grid(repeat(1, 1fr), repeat(3, max-content), 0, 24px);
  }

  @media screen and (max-width: 880px) {
    &_cards-container {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }

    &_column {
      grid-row-gap: 10px;
    }
  }
}
</style>

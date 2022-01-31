<template>
  <section class="container_regular p-96_bottom p-96_top media-p-48_top media-p-0_bottom key-project-milestone">
    <h3
      v-prlx="animationSettingsTitle"
      class="case_title_h2 m-48_bottom media-m-24_bottom"
    >
      Key project milestones
    </h3>
    <div
      class="media-m-48_bottom case_key-project-milestones"
    >
      <div class="case_cards-container m-12_bottom">
        <div
          class="case_column"
        >
          <CardTechSolution
            v-for="result in keyProjectMilestones.slice(0, 2)"
            v-bind="result"
            :key="result.icon"
            folder="yourcast"
            :icon="result.icon"
          />
        </div>
        <div
          v-prlx="animationSettingsCards"
          class="case_column"
        >
          <div class="case_column-right">
            <CardTechSolution
              v-for="result in keyProjectMilestones.slice(2, 5)"
              v-bind="result"
              :key="result.icon"
              folder="yourcast"
              :icon="result.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { keyProjectMilestones } from '@/data/caseYourcast'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'

export default {
  name: 'KeyProjectMilestones',
  components: {
    CardTechSolution,
  },

  data() {
    return {
      keyProjectMilestones,
      animationSettingsTitle: {
        direction: 'y',
        speed: 0.3,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -90,
          max: 90,
        },

        mobileMaxWidth: 977,
      },

      animationSettingsCards: {
        direction: 'y',
        speed: 0.6,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -240,
          max: 240,
        },

        mobileMaxWidth: 977,
      },
    }
  },
}
</script>

<style lang="scss">
.key-project-milestone {
  overflow: hidden;
}
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
    position: relative;
  }

  &_column {
    @include grid(repeat(1, 1fr), repeat(2, minmax(min-content, max-content)), 0, 24px);
    &-right {
      @media screen and (min-width: 997px) {
        position: absolute;
        top: 0;
        right: 0;
      }
      @include grid(repeat(1, 1fr), repeat(3, minmax(min-content, max-content)), 0, 24px);
    }
    ::v-deep{
      .card-content{
        align-self: start;
      }
    }
  }

  @media screen and (max-width: 976px) {
    &_cards-container {
      margin-bottom: 96px;
      @include grid(repeat(1, 1fr), auto, 0, 20px);
    }

    &_column,
    &_column-right {
      grid-row-gap: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    &_cards-container {
      margin-bottom: 48px;
    }
  }
}
</style>

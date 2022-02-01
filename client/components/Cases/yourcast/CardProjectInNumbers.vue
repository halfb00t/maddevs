<template>
  <section>
    <div class="container_full m-48_top media-m-24_top">
      <StatisticsContainer
        :grid="4"
      >
        <StatisticCard
          v-for="(projectInNumber, i) in projectInNumbersStatistics"
          :id="`projectInNumbers-item-${i}`"
          :key="projectInNumber.description"
          :number="projectInNumber.number"
          :number-text="projectInNumber.numberText"
          :name="projectInNumber.name"
          :number-color="projectInNumber.numberColor"
          :description="projectInNumber.description"
          :icon="projectInNumber.icon"
          section="projectInNumbers"
          :index="i"
          :without-space-after-number="true"
        />
      </StatisticsContainer>
    </div>
  </section>
</template>

<script>
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'
import { projectInNumbersStatistics } from '@/data/caseYourcast'

export default {
  name: 'CardProjectInNumbers',
  components: {
    StatisticsContainer,
    StatisticCard,
  },

  data() {
    return {
      projectInNumbersStatistics,
    }
  },
}
</script>

<style scoped lang="scss">
::v-deep .case_paragraph {
  padding: 0 48px;
  @media screen and (max-width: 820px) {
    padding: 0;
  }
}
</style>

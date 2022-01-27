<template>
  <section>
    <div class="container_full m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <StatisticsContainer
        :grid="4"
        class="m-48_bottom"
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
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import countUp from '@/helpers/countUp'

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

  mixins: [
    IntersectionObserverMixin(
      ['statistics-projectInNumbers-1'],
      countUp,
    ),
  ],
}
</script>

<style scoped lang="scss">
/deep/
.case_paragraph {
  font-size: 17px;
  padding: 0 45px;
  @media screen and (max-width: 820px) {
    padding: 0;
  }
}
</style>

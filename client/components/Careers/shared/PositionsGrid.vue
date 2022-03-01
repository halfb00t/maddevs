<template>
  <div>
    <ul class="positions-grid">
      <LazyHydrate
        v-for="vacancy in vacanciesToShow"
        :key="vacancy.uid"
        when-visible
      >
        <PositionsGridItem
          v-bind="vacancy"
        />
      </LazyHydrate>
    </ul>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { mapGetters } from 'vuex'

export default {
  name: 'PositionsGrid',
  components: {
    LazyHydrate,
    PositionsGridItem: () => import('@/components/Careers/shared/PositionsGridItem'),
  },

  computed: {
    ...mapGetters(['vacancies', 'filteredVacancies', 'vacanciesCategory']),

    vacanciesToShow() {
      if (this.vacanciesCategory) {
        return this.filteredVacancies
      }
      return this.vacancies
    },
  },
}
</script>

<style lang="scss" scoped>
.positions-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0.5px;
  margin-left: 0.5px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

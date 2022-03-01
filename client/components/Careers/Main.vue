<template>
  <div class="careers">
    <Banner />
    <LazyHydrate when-visible>
      <ProjectsCountries />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Benefits />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <KeyMetrics />
    </LazyHydrate>
    <div class="careers_white-section">
      <LazyHydrate when-visible>
        <EmployeesBenefits />
      </LazyHydrate>
      <LazyHydrate when-visible>
        <OpenPositions />
      </LazyHydrate>
      <LazyHydrate when-visible>
        <CTABanner />
      </LazyHydrate>
    </div>
    <ScrollToPositionsLink />
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { mapActions } from 'vuex'
import Banner from '@/components/Careers/Banner'
import ScrollToPositionsLink from '@/components/Careers/shared/ScrollToPositionsLink'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    Banner,
    ProjectsCountries: () => import('@/components/Careers/ProjectsCountries'),
    Benefits: () => import('@/components/Careers/Benefits'),
    KeyMetrics: () => import('@/components/Careers/KeyMetrics'),
    EmployeesBenefits: () => import('@/components/Careers/EmployeesBenefits'),
    OpenPositions: () => import('@/components/Careers/OpenPositions'),
    CTABanner: () => import('@/components/Careers/CTABanner'),
    ScrollToPositionsLink,
  },

  mounted() {
    // Query to get vacancies and categories
    this.getCareersHome()
  },

  methods: {
    ...mapActions(['getCareersHome']),
  },
}
</script>

<style lang="scss" scoped>
.careers {
  &_white-section {
    background-color: $bgcolor--white-primary;
  }
}
</style>

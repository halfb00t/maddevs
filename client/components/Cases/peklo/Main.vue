<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BenefitsFromPekloTool />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <HowPekloToolWorks />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <KeywordGrouping />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ClusterisationAlgorithm />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <PekloToolUnderTheHood />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Technologies />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Team />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    About: () => import('@/components/Cases/peklo/About'),
    BenefitsFromPekloTool: () => import('@/components/Cases/peklo/BenefitsFromPekloTool'),
    HowPekloToolWorks: () => import('@/components/Cases/peklo/HowPekloToolWorks'),
    KeywordGrouping: () => import('@/components/Cases/peklo/KeywordGrouping'),
    ClusterisationAlgorithm: () => import('@/components/Cases/peklo/ClusterisationAlgorithm'),
    PekloToolUnderTheHood: () => import('@/components/Cases/peklo/PekloToolUnderTheHood'),
    Technologies: () => import('@/components/Cases/peklo/Technologies'),
    Team: () => import('@/components/Cases/peklo/Team'),
    LazyHydrate,
  },
}
</script>

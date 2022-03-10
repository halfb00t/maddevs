<template>
  <section>
    <div id="case-first-section" />
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ProjectMission />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Challenges />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SavingTime />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <CollectingDataForAnalysis />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <DevelopingTheInnovation />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Technologies />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Team />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <FuturePlans />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Partnership />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import countUp from '@/helpers/countUp'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/itc/About'),
    ProjectMission: () => import('@/components/Cases/itc/ProjectMission'),
    Team: () => import('@/components/Cases/itc/Team'),
    Technologies: () => import('@/components/Cases/itc/Technologies'),
    Challenges: () => import('@/components/Cases/itc/Challenges'),
    SavingTime: () => import('@/components/Cases/itc/SavingTime'),
    CollectingDataForAnalysis: () => import('@/components/Cases/itc/CollectingDataForAnalysis'),
    DevelopingTheInnovation: () => import('@/components/Cases/itc/DevelopingTheInnovation'),
    FuturePlans: () => import('@/components/Cases/itc/FuturePlans'),
    Partnership: () => import('@/components/Cases/itc/Partnership'),
  },

  mixins: [
    IntersectionObserverMixin(
      ['itc-aim-1', 'itc-aim-2', 'itc-aim-3', 'reams', 'sheets-of-paper'],
      countUp,
    ),
  ],
}
</script>

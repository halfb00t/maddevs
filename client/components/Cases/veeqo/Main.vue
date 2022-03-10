<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <HighLevelOverview />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ChallengesAndSolutions />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseFixingDatabaseOutages />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseContinuousIntegration />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ContinuousIntegrationResult />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseElasticsearch />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseElasticsearchResult />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseCuttingTheCosts />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseMovingToKubernetes />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <InventoryChangeLog />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhasInfrastructureAsCode />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhasInfrastructureAsCodeResult />
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
    About: () => import('@/components/Cases/veeqo/About'),
    HighLevelOverview: () => import('@/components/Cases/veeqo/HighLevelOverview'),
    ChallengesAndSolutions: () => import('@/components/Cases/veeqo/ChallengesAndSolutions'),
    PhaseFixingDatabaseOutages: () => import('@/components/Cases/veeqo/PhaseFixingDatabaseOutages'),
    PhaseContinuousIntegration: () => import('@/components/Cases/veeqo/PhaseContinuousIntegration'),
    ContinuousIntegrationResult: () => import('@/components/Cases/veeqo/ContinuousIntegrationResult'),
    PhaseElasticsearch: () => import('@/components/Cases/veeqo/PhaseElasticsearch'),
    PhaseElasticsearchResult: () => import('@/components/Cases/veeqo/PhaseElasticsearchResult'),
    PhaseCuttingTheCosts: () => import('@/components/Cases/veeqo/PhaseCuttingTheCosts'),
    PhasInfrastructureAsCode: () => import('@/components/Cases/veeqo/PhasInfrastructureAsCode'),
    PhasInfrastructureAsCodeResult: () => import('@/components/Cases/veeqo/PhasInfrastructureAsCodeResult'),
    Team: () => import('@/components/Cases/veeqo/Team'),
    Technologies: () => import('@/components/Cases/veeqo/Technologies'),
    PhaseMovingToKubernetes: () => import('@/components/Cases/veeqo/PhaseMovingToKubernetes'),
    InventoryChangeLog: () => import('@/components/Cases/veeqo/InventoryChangeLog'),
    LazyHydrate,
  },
}
</script>

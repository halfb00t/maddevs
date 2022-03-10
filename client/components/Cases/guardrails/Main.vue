<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <StoryBehindProject />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ProjectIssues />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Dashboard />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ApiForDashboard />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <CliandKubernetes />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <TechnicalAgility />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <AgilityIsKey />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ResultsAndAchievements />
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
    About: () => import('@/components/Cases/guardrails/About'),
    StoryBehindProject: () => import('@/components/Cases/guardrails/StoryBehindProject'),
    ProjectIssues: () => import('@/components/Cases/guardrails/ProjectIssues'),
    Dashboard: () => import('@/components/Cases/guardrails/Dashboard'),
    ApiForDashboard: () => import('@/components/Cases/guardrails/ApiForDashboard'),
    CliandKubernetes: () => import('@/components/Cases/guardrails/CliandKubernetes'),
    TechnicalAgility: () => import('@/components/Cases/guardrails/TechnicalAgility'),
    AgilityIsKey: () => import('@/components/Cases/guardrails/AgilityIsKey'),
    ResultsAndAchievements: () => import('@/components/Cases/guardrails/ResultsAndAchievements'),
    Technologies: () => import('@/components/Cases/guardrails/Technologies'),
    Team: () => import('@/components/Cases/guardrails/Team'),
    LazyHydrate,
  },
}
</script>

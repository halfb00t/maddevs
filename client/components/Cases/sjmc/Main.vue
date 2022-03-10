<template>
  <section>
    <div
      id="case-first-section"
      class="case_animation_block"
    />
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Partnership />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TheChallenges />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Software />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <MobileApplications />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Hardware />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <KeyGoals />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Technologies />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Office />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TeamIssues />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SystemMonitoring />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <AutomatedTesting />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Trip />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <OngoingPartnership />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/sjmc/About'),
    Partnership: () => import('@/components/Cases/sjmc/Partnership'),
    TheChallenges: () => import('@/components/Cases/sjmc/TheChallenges'),
    Software: () => import('@/components/Cases/sjmc/Software'),
    MobileApplications: () => import('@/components/Cases/sjmc/MobileApplications'),
    Hardware: () => import('@/components/Cases/sjmc/Hardware'),
    KeyGoals: () => import('@/components/Cases/sjmc/KeyGoals'),
    Technologies: () => import('@/components/Cases/sjmc/Technologies'),
    Office: () => import('@/components/Cases/sjmc/Office'),
    TeamIssues: () => import('@/components/Cases/sjmc/TeamIssues'),
    SystemMonitoring: () => import('@/components/Cases/sjmc/SystemMonitoring'),
    AutomatedTesting: () => import('@/components/Cases/sjmc/AutomatedTesting'),
    Trip: () => import('@/components/Cases/sjmc/Trip'),
    OngoingPartnership: () => import('@/components/Cases/sjmc/OngoingPartnership'),
  },
}
</script>

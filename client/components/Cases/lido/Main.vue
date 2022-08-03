<template>
  <section class="case-lido__main">
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <LidoStatisticsWithTimeline />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TheStoryBehindTheProject />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ProjectGoals />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <FirstChallenge />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <VisualFlow />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SecondChallenge />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ImportantInsight />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ProjectPlanning />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Results />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TechnologiesStack />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <MeetTheTeam />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Terminology />
    </LazyHydrate>
  </section>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/lido/blocks/About'),
    LidoStatisticsWithTimeline: () => import('@/components/Cases/lido/blocks/LidoStatisticsWithTimeline'),
    TheStoryBehindTheProject: () => import('@/components/Cases/lido/blocks/TheStoryBehindTheProject'),
    ProjectGoals: () => import('@/components/Cases/lido/blocks/ProjectGoals'),
    FirstChallenge: () => import('@/components/Cases/lido/blocks/FirstChallenge'),
    VisualFlow: () => import('@/components/Cases/lido/blocks/VisualFlow'),
    SecondChallenge: () => import('@/components/Cases/lido/blocks/SecondChallenge'),
    ImportantInsight: () => import('@/components/Cases/lido/blocks/ImportantInsight'),
    ProjectPlanning: () => import('@/components/Cases/lido/blocks/ProjectPlanning'),
    Results: () => import('@/components/Cases/lido/blocks/Results'),
    TechnologiesStack: () => import('@/components/Cases/lido/blocks/TechnologiesStack'),
    MeetTheTeam: () => import('@/components/Cases/lido/blocks/MeetTheTeam'),
    Terminology: () => import('@/components/Cases/lido/blocks/Terminology'),
  },
}
</script>

<template>
  <section>
    <LazyHydrate :when-visible="{rootMargin: '100px'}">
      <About />
    </LazyHydrate>
    <LazyHydrate :when-visible="{rootMargin: '100px'}">
      <WhyClutch />
    </LazyHydrate>
    <LazyHydrate :when-visible="{rootMargin: '100px'}">
      <TechChallenges />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <OutStuffing />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Microservices />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <DataAndPasswords />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <WidgetSpeed />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <DataProcessed />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <DevOps />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Workflow />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Pipelines />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Standup />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TechStack />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Review />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    Review: () => import('@/components/Cases/clutch/Review'),
    TechStack: () => import('@/components/Cases/clutch/TechStack'),
    Standup: () => import('@/components/Cases/clutch/Standup'),
    Pipelines: () => import('@/components/Cases/clutch/Pipelines'),
    Workflow: () => import('@/components/Cases/clutch/Workflow'),
    DevOps: () => import('@/components/Cases/clutch/DevOps'),
    DataProcessed: () => import('@/components/Cases/clutch/DataProcessed'),
    WidgetSpeed: () => import('@/components/Cases/clutch/WidgetSpeed'),
    DataAndPasswords: () => import('@/components/Cases/clutch/DataAndPasswords'),
    TechChallenges: () => import('@/components/Cases/clutch/TechChallenges'),
    Microservices: () => import('@/components/Cases/clutch/Microservices'),
    WhyClutch: () => import('@/components/Cases/clutch/WhyClutch'),
    OutStuffing: () => import('@/components/Cases/clutch/OutStuffing'),
    About: () => import('@/components/Cases/clutch/About'),
    LazyHydrate,
  },
}
</script>

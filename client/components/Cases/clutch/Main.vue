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
// import About from '@/components/Cases/clutch/About'
// import OutStuffing from '@/components/Cases/clutch/OutStuffing'
// import WhyClutch from '@/components/Cases/clutch/WhyClutch'
// import Microservices from '@/components/Cases/clutch/Microservices'
// import TechChallenges from '@/components/Cases/clutch/TechChallenges'
// import DataAndPasswords from '@/components/Cases/clutch/DataAndPasswords'
// import WidgetSpeed from '@/components/Cases/clutch/WidgetSpeed'
// import DataProcessed from '@/components/Cases/clutch/DataProcessed'
// import DevOps from '@/components/Cases/clutch/DevOps'
// import Workflow from '@/components/Cases/clutch/Workflow'
// import Pipelines from '@/components/Cases/clutch/Pipelines'
// import Standup from '@/components/Cases/clutch/Standup'
// import TechStack from '@/components/Cases/clutch/TechStack'
// import Review from '@/components/Cases/clutch/Review'

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

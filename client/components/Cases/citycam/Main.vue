<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <WhyCityCam />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ChallengesAndSolutions />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Prototype />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PowerSupply />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <DevicePerfecting />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <OngoingProgress />
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
    LazyHydrate,
    About: () => import('@/components/Cases/citycam/About'),
    WhyCityCam: () => import('@/components/Cases/citycam/WhyCityCam'),
    ChallengesAndSolutions: () => import('@/components/Cases/citycam/ChallengesAndSolutions'),
    Prototype: () => import('@/components/Cases/citycam/Prototype'),
    PowerSupply: () => import('@/components/Cases/citycam/PowerSupply'),
    DevicePerfecting: () => import('@/components/Cases/citycam/DevicePerfecting'),
    OngoingProgress: () => import('@/components/Cases/citycam/OngoingProgress'),
    Technologies: () => import('@/components/Cases/citycam/Technologies'),
    Team: () => import('@/components/Cases/citycam/Team'),
  },
}
</script>

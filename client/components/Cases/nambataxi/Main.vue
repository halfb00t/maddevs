<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Benefits />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Requirements />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <FaultTolerance />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <MobileApplications />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TechStackNamba />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TeamNambaTaxi />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    TeamNambaTaxi: () => import('@/components/Cases/nambataxi/TeamNambaTaxi'),
    TechStackNamba: () => import('@/components/Cases/nambataxi/TechStackNamba'),
    MobileApplications: () => import('@/components/Cases/nambataxi/MobileApplications'),
    FaultTolerance: () => import('@/components/Cases/nambataxi/FaultTolerance'),
    Requirements: () => import('@/components/Cases/nambataxi/Requirements'),
    Benefits: () => import('@/components/Cases/nambataxi/Benefits'),
    About: () => import('@/components/Cases/nambataxi/About'),
  },
}
</script>

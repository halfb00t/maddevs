<template>
  <section
    ref="caseBody"
    class="case_body"
  >
    <div
      id="case-first-section"
      class="case_animation_block"
    />
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <BusinessModel />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SystemOverview />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <UsageScenarios />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Applications :is-iphone="isIphone" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <OrderingProcess />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TrackStatuses />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <CouriersApplication />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <AdminPanel />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Integrating />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Swift :is-iphone="isIphone" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Grafana />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Technologies />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <InfrastructureSchema />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Pipelines />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Team />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <NationwideSuccess />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import isIphoneMixin from '@/mixins/isIphoneMixin'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import playVideo from '@/helpers/playVideo'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/nambafood/About'),
    BusinessModel: () => import('@/components/Cases/nambafood/BusinessModel'),
    SystemOverview: () => import('@/components/Cases/nambafood/SystemOverview'),
    UsageScenarios: () => import('@/components/Cases/nambafood/UsageScenarios'),
    Applications: () => import('@/components/Cases/nambafood/Applications'),
    OrderingProcess: () => import('@/components/Cases/nambafood/OrderingProcess'),
    TrackStatuses: () => import('@/components/Cases/nambafood/TrackStatuses'),
    CouriersApplication: () => import('@/components/Cases/nambafood/CouriersApplication'),
    AdminPanel: () => import('@/components/Cases/nambafood/AdminPanel'),
    Integrating: () => import('@/components/Cases/nambafood/Integrating'),
    Swift: () => import('@/components/Cases/nambafood/Swift'),
    Grafana: () => import('@/components/Cases/nambafood/Grafana'),
    Technologies: () => import('@/components/Cases/nambafood/Technologies'),
    InfrastructureSchema: () => import('@/components/Cases/nambafood/InfrastructureSchema'),
    Pipelines: () => import('@/components/Cases/nambafood/Pipelines'),
    Team: () => import('@/components/Cases/nambafood/Team'),
    NationwideSuccess: () => import('@/components/Cases/nambafood/NationwideSuccess'),
  },

  mixins: [
    isIphoneMixin,
    IntersectionObserverMixin(
      ['map-video', 'iphone-silver-video'],
      playVideo,
    ),
  ],
}
</script>

<template>
  <section class="case_body p-48_top media-p-24_top">
    <LazyHydrate when-visible>
      <AboutYourcast id="case-first-section" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ProjectInNumbers />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SupportedGadgets />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <KeyProjectMilestones />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseOnlineCinema />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseLiveStreamingTechnology />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseRedesignAndOptimisations />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseVideoOnDemand />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PhaseUserAuthorisation />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <WatchWhatYouLikeVideo />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PlansForSimilarProjects />
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
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import playVideo from '@/helpers/playVideo'

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8,
}

export default {
  components: {
    LazyHydrate,
    AboutYourcast: () => import('@/components/Cases/yourcast/AboutYourcast'),
    ProjectInNumbers: () => import('@/components/Cases/yourcast/ProjectInNumbers'),
    SupportedGadgets: () => import('@/components/Cases/yourcast/SupportedGadgets'),
    Technologies: () => import('@/components/Cases/yourcast/Technologies'),
    KeyProjectMilestones: () => import('@/components/Cases/yourcast/KeyProjectMilestones'),
    PhaseOnlineCinema: () => import('@/components/Cases/yourcast/PhaseOnlineCinema'),
    PhaseLiveStreamingTechnology: () => import('@/components/Cases/yourcast/PhaseLiveStreamingTechnology'),
    PhaseRedesignAndOptimisations: () => import('@/components/Cases/yourcast/PhaseRedesignAndOptimisations'),
    PhaseVideoOnDemand: () => import('@/components/Cases/yourcast/PhaseVideoOnDemand'),
    PhaseUserAuthorisation: () => import('@/components/Cases/yourcast/PhaseUserAuthorisation'),
    WatchWhatYouLikeVideo: () => import('@/components/Cases/yourcast/WatchWhatYouLikeVideo'),
    PlansForSimilarProjects: () => import('@/components/Cases/yourcast/PlansForSimilarProjects'),
    Team: () => import('@/components/Cases/yourcast/Team'),
  },

  mixins: [
    IntersectionObserverMixin(
      ['yourcast-tv'],
      playVideo,
      observerOptions,
    ),
  ],
}
</script>

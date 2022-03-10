<template>
  <main class="case">
    <CaseHeader
      :logo="logo"
      project="godee"
      video-name="/videos/godee-case-main-video.mp4"
      video-fallback-path="/images/Cases/godee/jpg/godee-case-preview.jpg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Convenient shuttle <br>
        bus service
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs helped GoDee with developing feature-rich software to re-invent <br>
        public mobility by building new smart ways of a daily commute.
      </p>
    </CaseHeader>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <IssuesAndSolution />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ParallaxImage />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <IssuesAndSolutionCards />
    </LazyHydrate>
    <section class="container_full case_video-wrapper m-60_top media-m-24_top m-96_bottom media-m-48_bottom">
      <iframe
        v-lazy-load
        width="1440"
        height="809"
        data-src="https://www.youtube.com/embed/_XCRbXmTUwI"
        frameborder="0"
        allowfullscreen
      />
    </section>
    <LazyHydrate when-visible>
      <Collaboration />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Mvp />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <BeforeAfter />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <DevelopmentGoals />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PreviewCards />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <IntellegentManagementPanel :is-iphone="isIphone" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TripsMonitor :is-iphone="isIphone" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <RouteOptimisation :is-iphone="isIphone" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <RealTimeETA />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <InfrastructureScheme />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TechnologyStack />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Monitoring />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <StableScalableSolution />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Team />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <CaseFooter
        link="/case-studies/namba-food/"
        class-name="namba-food"
      >
        <img
          slot="icon"
          v-lazy-load
          :data-src="require(`@/assets/img/Studies/svg/nambafood-footer.svg`)"
          width="200"
          height="63"
          alt="Namba Food"
          class="case_logotype-namba-food"
        >
        Namba Food <br>
        Top Delivery Service in <br class="case_mobile-break-namba-food">
        Central Asia
      </CaseFooter>
    </LazyHydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import isIphoneMixin from '@/mixins/isIphoneMixin'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import playVideo from '@/helpers/playVideo'

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -2px 0px',
  threshold: 0.8,
}

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    CaseHeader,
    About: () => import('@/components/Cases/godee/About'),
    IssuesAndSolution: () => import('@/components/Cases/godee/IssuesAndSolution'),
    ParallaxImage: () => import('@/components/Cases/godee/ParallaxImage'),
    IssuesAndSolutionCards: () => import('@/components/Cases/godee/IssuesAndSolutionCards'),
    Collaboration: () => import('@/components/Cases/godee/Collaboration'),
    Mvp: () => import('@/components/Cases/godee/Mvp'),
    BeforeAfter: () => import('@/components/Cases/godee/BeforeAfter'),
    DevelopmentGoals: () => import('@/components/Cases/godee/DevelopmentGoals'),
    PreviewCards: () => import('@/components/Cases/godee/PreviewCards'),
    IntellegentManagementPanel: () => import('@/components/Cases/godee/IntellegentManagementPanel'),
    TripsMonitor: () => import('@/components/Cases/godee/TripsMonitor'),
    RouteOptimisation: () => import('@/components/Cases/godee/RouteOptimisation'),
    RealTimeETA: () => import('@/components/Cases/godee/RealTimeETA'),
    InfrastructureScheme: () => import('@/components/Cases/godee/InfrastructureScheme'),
    TechnologyStack: () => import('@/components/Cases/godee/TechnologyStack'),
    Monitoring: () => import('@/components/Cases/godee/Monitoring'),
    StableScalableSolution: () => import('@/components/Cases/godee/StableScalableSolution'),
    Team: () => import('@/components/Cases/godee/Team'),
    CaseFooter: () => import('@/components/Cases/shared/CaseFooter'),
  },

  mixins: [
    isIphoneMixin,
    IntersectionObserverMixin(
      ['trip-request-map', 'trip-monitor', 'route-optimization'],
      playVideo,
      observerOptions,
    ),
  ],

  data() {
    return {
      logo: {
        width: 293,
        height: 130,
        folder: 'godee',
        file: 'godee-logo',
        alt: 'Godee Logo',
      },
    }
  },
}
</script>

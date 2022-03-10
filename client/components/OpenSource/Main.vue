<template>
  <div class="open-source">
    <LazyHydrate when-visible>
      <Banner />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ParagraphSection />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <FeaturedProjects />
    </LazyHydrate>
    <div class="open-source--bg-white">
      <LazyHydrate when-visible>
        <Boilerplates />
      </LazyHydrate>
      <LazyHydrate when-visible>
        <CTABanner />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    Banner: () => import('@/components/OpenSource/Banner'),
    ParagraphSection: () => import('@/components/OpenSource/ParagraphSection'),
    FeaturedProjects: () => import('@/components/OpenSource/FeaturedProjects'),
    Boilerplates: () => import('@/components/OpenSource/Boilerplates'),
    CTABanner: () => import('@/components/OpenSource/CTABanner'),
  },
}
</script>

<style lang="scss" scoped>
.open-source {
  color: $text-color--white-primary;
  &--bg-white {
    background-color: $bgcolor--white-primary;
    color: $text-color--black-oil;
  }
}
</style>

<template>
  <div class="delivery-models">
    <LazyHydrate when-visible>
      <Banner />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ModelsGrid />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Presentation />
    </LazyHydrate>
    <div class="delivery-models--bg-white">
      <LazyHydrate when-visible>
        <Testimonials />
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
    Banner: () => import('@/components/DeliveryModels/Banner'),
    ModelsGrid: () => import('@/components/DeliveryModels/ModelsGrid'),
    Presentation: () => import('@/components/DeliveryModels/Presentation'),
    Testimonials: () => import('@/components/DeliveryModels/Testimonials'),
    CTABanner: () => import('@/components/DeliveryModels/CTABanner'),
  },
}
</script>

<style lang="scss" scoped>
.delivery-models {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
}
</style>

<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <OpportunitiesCards />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <BenefitMostBandPay />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ChallengesSolutions />
    </LazyHydrate>
  </section>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/bandpay/About'),
    OpportunitiesCards: () => import('@/components/Cases/bandpay/OpportunitiesCards'),
    BenefitMostBandPay: () => import('@/components/Cases/bandpay/BenefitMostBandPay'),
    ChallengesSolutions: () => import('@/components/Cases/bandpay/ChallengesSolutions'),
  },

}
</script>

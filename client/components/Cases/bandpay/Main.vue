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
    <LazyHydrate when-visible>
      <LookingAtTheFrontend />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <IntegratingOnline />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TwoSmartphones />
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
    LookingAtTheFrontend: () => import('@/components/Cases/bandpay/LookingAtTheFrontend'),
    IntegratingOnline: () => import('@/components/Cases/bandpay/IntegratingOnline'),
    TwoSmartphones: () => import('@/components/Cases/bandpay/TwoSmartphones'),
  },

}
</script>

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
    <LazyHydrate when-visible>
      <WhatIsBackend />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <BandPayAppArchitecture />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ImplementingPipelines />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <BuyerRegistration />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ProjectDevelopment />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ProjectPlanning />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <KeyAchievements />
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
    WhatIsBackend: () => import('@/components/Cases/bandpay/WhatIsBackend'),
    BandPayAppArchitecture: () => import('@/components/Cases/bandpay/BandPayAppArchitecture'),
    ImplementingPipelines: () => import('@/components/Cases/bandpay/ImplementingPipelines'),
    BuyerRegistration: () => import('@/components/Cases/bandpay/BuyerRegistration'),
    ProjectDevelopment: () => import('@/components/Cases/bandpay/ProjectDevelopment'),
    ProjectPlanning: () => import('@/components/Cases/bandpay/ProjectPlanning'),
    KeyAchievements: () => import('@/components/Cases/bandpay/KeyAchievements'),
  },

}
</script>

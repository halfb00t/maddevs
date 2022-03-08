<template>
  <main class="main">
    <LazyHydrate when-visible>
      <TitleDesc />
    </LazyHydrate>
    <CasesList item-title-tag="h2" />
    <LazyHydrate when-visible>
      <Customers light />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <BuildDevTeam />
    </LazyHydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainCaseStudies',

  components: {
    LazyHydrate,
    TitleDesc: () => import('@/components/Cases/TitleDesc'),
    CasesList: () => import('@/components/Cases/CasesList'),
    Customers: () => import('@/components/Cases/Customers'),
    BuildDevTeam: () => import('@/components/Cases/BuildDevTeam'),
  },

  nuxtI18n: false,

  head() {
    return buildHead(getMetadata('caseStudies'))
  },
}
</script>

<style lang="scss" scoped>
  /deep/ .cases-list_see-more {
    display: none;
  }
</style>

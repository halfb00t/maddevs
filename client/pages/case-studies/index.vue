<template>
  <main class="main">
    <TitleDesc />
    <CasesList item-title-tag="h2" />
    <Customers light />
    <BuildDevTeam />
  </main>
</template>

<script>
import TitleDesc from '@/components/Cases/TitleDesc'
import CasesList from '@/components/Cases/CasesList'
import Customers from '@/components/Cases/Customers'
import BuildDevTeam from '@/components/Cases/BuildDevTeam'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainCaseStudies',
  components: {
    TitleDesc,
    CasesList,
    Customers,
    BuildDevTeam,
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

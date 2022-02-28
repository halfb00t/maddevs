<template>
  <main class="main">
    <LazyHydrate when-visible>
      <GDPR />
    </LazyHydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainGdpr',

  components: {
    LazyHydrate,
    GDPR: () => import('@/components/core/GDPR'),
  },

  nuxtI18n: false,

  head() {
    return buildHead(getMetadata('gdpr'))
  },
}
</script>

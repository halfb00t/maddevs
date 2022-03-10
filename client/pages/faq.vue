<template>
  <main class="main">
    <LazyHydrate when-visible>
      <FAQ />
    </LazyHydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainFaq',

  components: {
    LazyHydrate,
    FAQ: () => import('@/components/core/FAQ'),
  },

  nuxtI18n: false,
  head() {
    return buildHead(getMetadata('faq'))
  },
}
</script>

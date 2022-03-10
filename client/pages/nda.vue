<template>
  <main class="main">
    <LazyHydrate when-visible>
      <NDA />
    </LazyHydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainNda',
  components: {
    NDA: () => import('@/components/core/NDA'),
    LazyHydrate,
  },

  nuxtI18n: false,

  head() {
    return buildHead(getMetadata('nda'))
  },
}
</script>

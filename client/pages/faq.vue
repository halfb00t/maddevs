<template>
  <main class="main">
    <FAQ />
  </main>
</template>

<script>
import FAQ from '@/components/core/FAQ'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainFaq',
  components: {
    FAQ,
  },

  nuxtI18n: false,
  head() {
    return buildHead(getMetadata('faq'))
  },
}
</script>

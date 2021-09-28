<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/OpenSource/Main'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'OpenSource',
  components: {
    Main,
  },

  nuxtI18n: false,

  mixins: [
    animateOnScrollMixin({
      offset: 200,
      delay: 50,
      anchorPlacement: 'top-center',
      duration: 1000,
      once: true,
    }),
    headerMixin('.open-source-banner'),
  ],

  head() {
    return buildHead(getMetadata('openSource'))
  },
}
</script>

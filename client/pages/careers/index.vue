<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/Careers/Main'
import { getMetadata, buildHead } from '@/data/seo'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'MainCareers',
  components: {
    Main,
  },

  mixins: [headerMixin('.careers-banner')],

  middleware: 'redirectToHomePage',

  head() {
    return {
      ...buildHead(
        {
          ...getMetadata('careers'),
          url: `https://maddevs.io${this.$route.path}`,
          title: this.$t('careers.meta.title'),
          description: this.$t('careers.meta.description'),
          image: 'https://maddevs.io/careers.png',
        }, // meta tags
        [], // scripts
      ),

      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

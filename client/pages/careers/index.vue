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

  head() {
    return {
      ...buildHead(
        {
          ...getMetadata('careers'),
          url: `https://maddevs.io${this.$route.path}`,
          title: this.$t('careers.meta.title'),
          description: this.$t('careers.meta.description'),
        }, // meta tags
        [], // scripts
        [
          { rel: 'alternate', hreflang: 'en', href: 'https://maddevs.io/careers/' },
          { rel: 'alternate', hreflang: 'x-default', href: 'https://maddevs.io/careers/' },
          { rel: 'alternate', hreflang: 'ru', href: 'https://maddevs.io/ru/careers/' },
        ], // links
      ),

      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>

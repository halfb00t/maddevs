<template>
  <SliceZone
    type="page"
    :slices="customPage.slices"
  />
</template>

<script>
import { mapActions } from 'vuex'
import SliceZone from 'vue-slicezone'
import { buildHead } from '@/data/seo'
import headerMixin from '@/mixins/headerMixin'

export default {
  components: {
    SliceZone,
  },

  mixins: [headerMixin('.start-screen-slice')],

  beforeRouteLeave(to, from, next) {
    this.showFooter(true)
    next()
  },

  async asyncData({ error, params, store }) {
    await store.dispatch('getCustomPage', params.uid)
    const { customPage } = store?.getters

    if (!customPage?.slices) return error({ statusCode: 404, message: 'Page not found' })
    if (!customPage.released && process.env.ffEnvironment === 'production') {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    store.dispatch('showFooter', customPage.showFooter)
    return {
      customPage,
      openGraphUrl: `${process.env.domain}/${params.uid}/`,
    }
  },

  head() {
    return buildHead({
      url: this.openGraphUrl,
      title: this.customPage.metaTitle || '',
      description: this.customPage.metaDescription || '',
      jsonLd: this.customPage.schemaOrgSnippet,
    })
  },

  methods: {
    ...mapActions(['showFooter']),
  },
}
</script>

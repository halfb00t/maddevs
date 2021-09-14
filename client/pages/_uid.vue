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
import getRoutePrefix from '@/helpers/getRoutePrefix'

export default {
  components: {
    SliceZone,
  },

  mixins: [headerMixin('.start-screen-slice')],

  beforeRouteLeave(to, from, next) {
    this.showFooter(true)
    next()
  },

  async asyncData({
    error, params, store, route,
  }) {
    await store.dispatch('getCustomPage', params.uid)
    const { customPage } = store?.getters

    if (
      !customPage?.slices
      || (!customPage.released && process.env.ffEnvironment === 'production')
      || getRoutePrefix(route.path) !== `${customPage.routePrefix}/${params.uid}`
    ) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    store.dispatch('showFooter', customPage.showFooter)
    return {
      customPage,
      openGraphUrl: `${process.env.domain}/${customPage.routePrefix}/${params.uid}/`,
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

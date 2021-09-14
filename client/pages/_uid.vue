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

  beforeRouteEnter(to, from, next) {
    next(vm => {
      const { params } = to
      const { customPage } = vm
      /**
       * Prismic saves all previous UID and they both still resolve
       * This condition checks the current uid and redirects to it
       * https://community.prismic.io/t/when-does-cache-expire-uid-history/874 - about this issue
       */
      if (params.uid !== customPage.uid && typeof customPage.uid === 'string') {
        next({ path: `/${customPage.routePrefix}/${customPage.uid}/` })
      } else {
        next()
      }
    })
  },

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

<template>
  <SliceZone
    type="page"
    :slices="customPage.slices"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'
import getRoutePrefix from '@/helpers/getRoutePrefix'

export default {
  components: {
    SliceZone,
  },

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

  async asyncData({
    error, store, route,
  }) {
    await store.dispatch('getCustomPage', 'authors')
    const { customPage } = store?.getters

    if (
      !customPage?.slices
      || (!customPage.released && process.env.ffEnvironment === 'production')
      || getRoutePrefix(route.path) !== `${customPage.routePrefix ? `${customPage.routePrefix}/` : ''}${'authors'}`
    ) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      customPage,
    }
  },

}
</script>

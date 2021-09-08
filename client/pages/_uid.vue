<template>
  <SliceZone
    type="page"
    :slices="slices"
  />
</template>

<script>
import { mapActions } from 'vuex'
import SliceZone from 'vue-slicezone'
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

  async asyncData({
    error,
    params,
    $prismic,
    store,
  }) {
    const response = await $prismic.api.getByUID('custom_page', params.uid)
    if (!response?.data?.body) return error({ statusCode: 404, message: 'Page not found' })
    if (!response.data.released && process.env.ffEnvironment === 'production') {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    store.dispatch('showFooter', response.data.show_footer)
    return {
      slices: response.data.body,
    }
  },

  methods: {
    ...mapActions(['showFooter']),
  },
}
</script>

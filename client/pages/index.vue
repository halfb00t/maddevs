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

  async asyncData({ store }) {
    await store.dispatch('getCustomPage', 'about')
    const { customPage } = store?.getters

    store.dispatch('showFooter', customPage.showFooter)
    return {
      customPage,
      openGraphUrl: `${process.env.domain}/`,
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

<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/DeliveryModels/Main'
import { getMetadata, buildHead } from '@/data/seo'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'DeliveryModels',
  components: {
    Main,
  },

  mixins: [headerMixin('.delivery-model-banner')],

  nuxtI18n: false,

  head() {
    return buildHead(getMetadata('delivery-models'))
  },
}
</script>

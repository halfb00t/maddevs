<template>
  <div class="error-layout">
    <HeaderV2 v-if="showHeaderV2" />
    <Header v-else />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderV2 from '@/components/core/HeaderV2'
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'
import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'ErrorLayout',
  components: {
    HeaderV2,
    Header,
    Footer,
  },

  computed: {
    showHeaderV2() {
      if (featureFlag('headerV2')) return true
      return false
    },
  },
}
</script>

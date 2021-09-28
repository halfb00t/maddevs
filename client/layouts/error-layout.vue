<template>
  <div class="error-layout">
    <HeaderV2 />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderV2 from '@/components/core/HeaderV2'
import Footer from '@/components/core/Footer/Footer'

export default {
  name: 'ErrorLayout',
  components: {
    HeaderV2,
    Footer,
  },
}
</script>

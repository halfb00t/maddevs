<template>
  <LazyHydrate when-visible>
    <About />
  </LazyHydrate>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/bandpay/About'),
  },

}
</script>

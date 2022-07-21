<template>
  <section>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
  </section>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Main',
  components: {
    LazyHydrate,
    About: () => import('@/components/Cases/lido/blocks/About'),
  },
}
</script>

<template>
  <section>
    <About />
    <WhyCityCam />
  </section>
</template>

<script>

import About from '@/components/Cases/citycam/About'
import WhyCityCam from '@/components/Cases/citycam/WhyCityCam'

export default {
  name: 'Main',
  components: {
    About,
    WhyCityCam,
  },
}
</script>

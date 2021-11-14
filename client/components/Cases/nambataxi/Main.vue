<template>
  <section>
    <About />
    <Benefits />
    <Requirements />
    <FaultTolerance />
  </section>
</template>

<script>

import About from '@/components/Cases/nambataxi/About'
import Benefits from '@/components/Cases/nambataxi/Benefits'
import Requirements from '@/components/Cases/nambataxi/Requirements'
import FaultTolerance from '@/components/Cases/nambataxi/FaultTolerance'

export default {
  name: 'Main',
  components: {
    FaultTolerance, Requirements, Benefits, About,
  },
}
</script>

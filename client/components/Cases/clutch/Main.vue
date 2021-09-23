<template>
  <section>
    <About />
    <OutStuffing />
  </section>
</template>

<script>

import About from '@/components/Cases/clutch/About'
import OutStuffing from '@/components/Cases/clutch/OutStuffing'

export default {
  name: 'Main',
  components: {
    OutStuffing,
    About,
  },
}
</script>

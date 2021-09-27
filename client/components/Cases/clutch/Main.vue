<template>
  <section>
    <About />
    <WhyClutch />
    <TechChallenges />
    <DataProcessed />
  </section>
</template>

<script>

import TechChallenges from '@/components/Cases/clutch/TechChallenges'
import About from '@/components/Cases/clutch/About'
import WhyClutch from '@/components/Cases/clutch/WhyClutch'
import DataProcessed from '@/components/Cases/clutch/DataProcessed'

export default {
  name: 'Main',
  components: {
    DataProcessed,
    WhyClutch,
    About,
    TechChallenges,
  },
}
</script>

<template>
  <section>
    <About />
    <WhyClutch />
    <TechChallenges />
    <WidgetSpeed />
  </section>
</template>

<script>

import TechChallenges from '@/components/Cases/clutch/TechChallenges'
import WidgetSpeed from '@/components/Cases/clutch/WidgetSpeed'
import About from '@/components/Cases/clutch/About'
import WhyClutch from '@/components/Cases/clutch/WhyClutch'

export default {
  name: 'Main',
  components: {
    WhyClutch,
    About,
    WidgetSpeed,
    TechChallenges,
  },
}
</script>

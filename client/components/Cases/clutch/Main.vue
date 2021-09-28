<template>
  <section>
    <About />
    <WhyClutch />
    <TechChallenges />
    <OutStuffing />
    <Microservices />
    <DataAndPasswords />
    <WidgetSpeed />
    <DataProcessed />
    <DevOps />
  </section>
</template>

<script>

import About from '@/components/Cases/clutch/About'
import OutStuffing from '@/components/Cases/clutch/OutStuffing'
import WhyClutch from '@/components/Cases/clutch/WhyClutch'
import Microservices from '@/components/Cases/clutch/Microservices'
import TechChallenges from '@/components/Cases/clutch/TechChallenges'
import DataAndPasswords from '@/components/Cases/clutch/DataAndPasswords'
import WidgetSpeed from '@/components/Cases/clutch/WidgetSpeed'
import DataProcessed from '@/components/Cases/clutch/DataProcessed'
import DevOps from '@/components/Cases/clutch/DevOps'

export default {
  name: 'Main',
  components: {
    DevOps,
    DataProcessed,
    WidgetSpeed,
    DataAndPasswords,
    TechChallenges,
    Microservices,
    WhyClutch,
    OutStuffing,
    About,
  },
}
</script>

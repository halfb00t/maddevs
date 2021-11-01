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
    <Workflow />
    <Pipelines />
    <Standup />
    <TechStack />
    <Review />
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
import Workflow from '@/components/Cases/clutch/Workflow'
import Pipelines from '@/components/Cases/clutch/Pipelines'
import Standup from '@/components/Cases/clutch/Standup'
import TechStack from '@/components/Cases/clutch/TechStack'
import Review from '@/components/Cases/clutch/Review'

export default {
  name: 'Main',
  components: {
    Review,
    TechStack,
    Standup,
    Pipelines,
    Workflow,
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

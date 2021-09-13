<template>
  <section>
    <About />
    <WhyCityCam />
    <ChallengesAndSolutions />
    <Prototype />
    <PowerSupply />
    <DevicePerfecting />
    <OngoingProgress />
    <Technologies />
  </section>
</template>

<script>

import About from '@/components/Cases/citycam/About'
import WhyCityCam from '@/components/Cases/citycam/WhyCityCam'
import ChallengesAndSolutions from '@/components/Cases/citycam/ChallengesAndSolutions'
import Prototype from '@/components/Cases/citycam/Prototype'
import PowerSupply from '@/components/Cases/citycam/PowerSupply'
import DevicePerfecting from '@/components/Cases/citycam/DevicePerfecting'
import OngoingProgress from '@/components/Cases/citycam/OngoingProgress'
import Technologies from '@/components/Cases/citycam/Technologies'

export default {
  name: 'Main',
  components: {
    Technologies,
    OngoingProgress,
    DevicePerfecting,
    PowerSupply,
    Prototype,
    ChallengesAndSolutions,
    About,
    WhyCityCam,
  },
}
</script>

<template>
  <section>
    <About />
    <WhyCityCam />
    <ChallengesAndSolutions />
    <Prototype />
    <PowerSupply />
  </section>
</template>

<script>

import About from '@/components/Cases/citycam/About'
import WhyCityCam from '@/components/Cases/citycam/WhyCityCam'
import ChallengesAndSolutions from '@/components/Cases/citycam/ChallengesAndSolutions'
import Prototype from '@/components/Cases/citycam/Prototype'
import PowerSupply from '@/components/Cases/citycam/PowerSupply'

export default {
  name: 'Main',
  components: {
    PowerSupply,
    Prototype,
    ChallengesAndSolutions,
    About,
    WhyCityCam,
  },
}
</script>

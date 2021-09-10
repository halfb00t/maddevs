<template>
  <section>
    <About />
    <WhyCityCam />
    <ChallengesAndSolutions />
    <Prototype />
  </section>
</template>

<script>

import About from '@/components/Cases/citycam/About'
import WhyCityCam from '@/components/Cases/citycam/WhyCityCam'
import ChallengesAndSolutions from '@/components/Cases/citycam/ChallengesAndSolutions'
import Prototype from '@/components/Cases/citycam/Prototype'

export default {
  name: 'Main',
  components: {
    Prototype,
    ChallengesAndSolutions,
    About,
    WhyCityCam,
  },
}
</script>

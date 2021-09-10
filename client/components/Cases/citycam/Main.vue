<template>
  <section>
    <About />
    <WhyCityCam />
    <ChallengesAndSolutions />
  </section>
</template>

<script>

import About from '@/components/Cases/citycam/About'
import WhyCityCam from '@/components/Cases/citycam/WhyCityCam'
import ChallengesAndSolutions from '@/components/Cases/citycam/ChallengesAndSolutions'

export default {
  name: 'Main',
  components: {
    ChallengesAndSolutions,
    About,
    WhyCityCam,
  },
}
</script>

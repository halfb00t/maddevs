<template>
  <section>
    <About />
    <TechChallenges />
    <DataAndPasswords />
  </section>
</template>

<script>

import TechChallenges from '@/components/Cases/clutch/TechChallenges'
import DataAndPasswords from '@/components/Cases/clutch/DataAndPasswords'
import About from '@/components/Cases/clutch/About'

export default {
  name: 'Main',
  components: {
    About,
    TechChallenges,
    DataAndPasswords,
  },
}
</script>

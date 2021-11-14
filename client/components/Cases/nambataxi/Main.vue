<template>
  <section>
    <About />
    <Benefits />
    <Requirements />
    <FaultTolerance />
    <MobileApplications />
    <TechStackNamba />
    <TeamNambaTaxi />
  </section>
</template>

<script>

import About from '@/components/Cases/nambataxi/About'
import Benefits from '@/components/Cases/nambataxi/Benefits'
import Requirements from '@/components/Cases/nambataxi/Requirements'
import FaultTolerance from '@/components/Cases/nambataxi/FaultTolerance'
import MobileApplications from '@/components/Cases/nambataxi/MobileApplications'
import TechStackNamba from '@/components/Cases/nambataxi/TechStackNamba'
import TeamNambaTaxi from '@/components/Cases/nambataxi/TeamNambaTaxi'

export default {
  name: 'Main',
  components: {
    TeamNambaTaxi,
    TechStackNamba,
    MobileApplications,
    FaultTolerance,
    Requirements,
    Benefits,
    About,
  },
}
</script>

<template>
  <section class="container_regular p-96_bottom p-96_top media-p-48_top media-p-0_bottom key-project-milestone">
    <h3
      class="case_title_h2 m-48_bottom media-m-24_bottom"
    >
      Key project milestones
    </h3>
    <ParallaxCards :data-cards="keyProjectMilestones" />
  </section>
</template>

<script>
import { keyProjectMilestones } from '@/data/caseYourcast'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

export default {
  name: 'KeyProjectMilestones',
  components: {
    ParallaxCards,
  },

  data() {
    return {
      keyProjectMilestones,
    }
  },
}
</script>

<style lang="scss">
.key-project-milestone {
  overflow: hidden;
}
</style>

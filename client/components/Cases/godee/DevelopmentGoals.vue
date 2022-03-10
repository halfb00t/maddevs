<template>
  <section
    class="container_regular m-96_bottom media-m-46_bottom"
  >
    <h3
      class="case_title_h2 m-24_bottom case_text-align-center"
    >
      Development goals
    </h3>
    <ParallaxCards
      :data-cards="developmentGoals"
    />
  </section>
</template>

<script>
import { developmentGoals } from '@/data/caseGodee'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

export default {
  name: 'DevelopmentGoals',
  components: {
    ParallaxCards,
  },

  data() {
    return {
      developmentGoals,
    }
  },
}
</script>

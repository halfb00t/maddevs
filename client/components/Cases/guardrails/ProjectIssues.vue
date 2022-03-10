<template>
  <section
    class="container_regular"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom"
  >
    <h2 class="case_title_h2 m-24_bottom">
      Project issues and how we resolved them
    </h2>
    <ColoredCards
      :cards-data="ProjectsIssuesCards"
      grid-type="two-two"
      class="m-72_bottom media-m-48_bottom"
    />
  </section>
</template>

<script>
import { ProjectsIssuesCards } from '@/data/caseGuardrails'
import ColoredCards from '@/components/Cases/shared/ColoredCards'

export default {
  name: 'ProjectIssues',
  components: {
    ColoredCards,
  },

  data() {
    return {
      ProjectsIssuesCards,
    }
  },
}
</script>

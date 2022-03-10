<template>
  <section
    class="container_regular m-72_bottom media-m-48_bottom"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom"
  >
    <h2 class="case_title_h2 m-24_bottom">
      Who benefits from Peklo Tool
    </h2>
    <ColoredCards
      :cards-data="benefitsCards"
      grid-type="two-one"
    />
  </section>
</template>

<script>
import { benefitsCards } from '@/data/casePeklo'
import ColoredCards from '@/components/Cases/shared/ColoredCards'

export default {
  name: 'BenefitsFromPekloTool',
  components: {
    ColoredCards,
  },

  data() {
    return {
      benefitsCards,
    }
  },
}
</script>

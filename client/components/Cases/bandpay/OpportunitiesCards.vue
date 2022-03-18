<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3 class="case_title_h2 case_title m-12_bottom">
      Opportunities with BandPay
    </h3>
    <ColoredCards
      :cards-data="coloredCardsItems.slice(0, 3)"
      grid-type="two-one"
      class="m-24_bottom"
    />
    <ColoredCards
      :cards-data="coloredCardsItems.slice(3)"
      grid-type="one-left-two-right"
    />
  </section>
</template>
<script>
import ColoredCards from '@/components/Cases/shared/ColoredCards'
import { coloredCardsItems } from '@/data/caseBandpay'

export default {
  name: 'OpportunitiesCards',
  components: {
    ColoredCards,
  },

  data() {
    return {
      coloredCardsItems,
    }
  },
}
</script>
<style lang="scss" scoped>

</style>

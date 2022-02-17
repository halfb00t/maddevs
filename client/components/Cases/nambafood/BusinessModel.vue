<template>
  <section class="container_regular">
    <h2 class="case_title_h2 case_text-align-center m-24_bottom media-m-12_bottom">
      Multi-directional business model
    </h2>
    <TextParagraph class="m-24_bottom case_text-align-center">
      Namba Food achieves complete synergy by diversifying to multi-directional business models.
    </TextParagraph>
    <Card class="background-color-black">
      <CardNinjaSushi />
    </Card>
    <div class="cards">
      <ColoredCards
        :cards-data="nambaFood"
        grid-type="one-left-two-right"
      />
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import ColoredCards from '@/components/Cases/shared/ColoredCards'
import { nambaFood } from '@/data/nambaFood'
import CardNinjaSushi from '@/components/Cases/nambafood/cards/CardNinjaSushi'

export default {
  name: 'BusinessModel',
  components: {
    TextParagraph,
    ColoredCards,
    Card,
    CardNinjaSushi,
  },

  data() {
    return {
      nambaFood,
    }
  },
}
</script>

<style lang="scss" scoped>
.cards {
  margin-top: 24px;
}
</style>

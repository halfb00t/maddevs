<template>
  <div class="colored-cards">
    <ColoredCard
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :pre-title="card.preTitle"
      :descriptions="card.descriptions"
      :image="card.image"
      :has-image="card.hasImage"
      :color-name="card.colorName"
    />
  </div>
</template>

<script>
import ColoredCard from '@/components/Cases/shared/ColoredCards/ColoredCard'

export default {
  name: 'ColoredCards',
  components: {
    ColoredCard,
  },

  props: {
    cards: {
      type: [Object, Array],
      default() {
        return {}
      },
    },
  },

  mounted() {
    console.log(this.cards)
  },
}
</script>

<style scoped lang="scss">
.colored-cards{
  //@include grid(repeat(1, 1fr), auto, 0, 24px);
    @include grid(repeat(2, 1fr), auto, 24px, 0);

}
//&_cards-group {
//  @include grid(repeat(2, 1fr), auto, 24px, 0);
//}

//.colored-card{
//
//}
//
//&_card-title {
//  color: $text-color--white;
//}
//
//&_card-img {
//  min-width: 396px;
//  margin: -32px 0 0;
//  position: relative;
//  left: 50%;
//  transform: translateX(-50%);
//
//  @media screen and (max-width: 768px) {
//    margin: -20px 0 0;
//  }
//
//  @media screen and (min-width: 470px) and (max-width: 720px) {
//    min-width: 550px
//  }
//}
//
//@media screen and (max-width: 720px) {
//  &_cards-group {
//    @include grid(repeat(1, 1fr), auto, 0, 24px);
//  }
//}

</style>

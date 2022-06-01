<template>
  <div class="two-big-cards">
    <div class="two-big-cards__big-cards">
      <BigCard
        v-for="(card, i) in bigCards.slice(0, 2)"
        :key="card.title + i"
        v-bind="card"
        :two-cards="true"
      />
    </div>
    <div class="two-big-cards__little-cards">
      <LittleCard
        v-for="(card, i) in littleCards"
        :key="card.title + i"
        :title="card.title"
        :icon="card.icon"
      />
    </div>
  </div>
</template>
<script>
import BigCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/BigCard'
import LittleCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/LittleCard'

export default {
  name: 'TwoBigCards',

  components: {
    BigCard,
    LittleCard,
  },

  props: {
    bigCards: {
      type: Array,
      default: () => [],
    },

    littleCards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
.two-big-cards {
  &__big-cards {
    margin-bottom: 20px;
    @include grid(repeat(2, 1fr), auto, 20px, 20px);
    @media screen and (max-width: 830px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }

  &__little-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
}
</style>

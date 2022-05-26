<template>
  <div class="three-big-cards">
    <div class="three-big-cards__big-cards">
      <BigCard
        v-for="(card, i) in bigCards.slice(0, 3)"
        :key="card.title + i"
        v-bind="card"
        :three-cards="true"
      />
    </div>
    <div class="three-big-cards__little-cards">
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
  name: 'ThreeBigCards',

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
.three-big-cards {
  &__big-cards {
    margin-bottom: 20px;
    @include grid(repeat(3, 1fr), auto, 20px, 20px);
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

<template>
  <div class="one-big-cards">
    <BigCard
      v-for="(card, i) in bigCards.slice(0, 1)"
      :key="card.title + i"
      v-bind="card"
      :one-cards="true"
    />
    <LittleCard
      v-for="(card, i) in littleCards"
      :key="card.title + i"
      :title="card.title"
      :icon="card.icon"
    />
  </div>
</template>
<script>
import BigCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/BigCard'
import LittleCard from '@/prismicSlices/pageParts/TechAndToolsNewSlice/components/LittleCard'

export default {
  name: 'OneBigCards',

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
.one-big-cards {
  margin-bottom: 20px;
  @include grid(repeat(10, 1fr), auto, 20px, 20px);
  @media screen and (max-width: 1170px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 15px;
  }

  @media screen and (max-width: 1214px) {
    ::v-deep .technologies__little-card {
      min-width: auto;
    }
  }

  @media screen and (min-width: 1170px) {
    ::v-deep .technologies__little-card-icon {
      min-width: 20px;
    }
  }
}
</style>

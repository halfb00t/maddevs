<!--Please check readme.md-->
<template>
  <div
    v-if="availableGridTypes.includes(gridType)"
    class="colored-cards"
    :class="`card-grid-type--${gridType}`"
  >
    <ColoredCard
      v-for="(card, index) in cardsData"
      :key="index+1"
      :pre-title="card.preTitle"
      :title="card.title"
      :descriptions="card.descriptions"
      :image="card.image"
      :colors="card.colors"
      :card-index="index+1"
      :picture-right="pictureRight"
      :vertical-centered-title="card.verticalCenteredTitle"
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
    cardsData: {
      type: [Object, Array],
      required: true,
    },

    gridType: { // available types: one-one, two-one, two-two, one-left-two-right
      type: String,
      required: true,
    },

    pictureRight: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      availableGridTypes: ['one-one', 'two-one', 'two-two', 'one-left-two-right'],
    }
  },
}
</script>

<style scoped lang="scss">
.colored-cards {
  display: grid;
  grid-gap: 24px;
}

.card-grid-type {
  &--one-one {
    grid-template-columns: repeat(2, 1fr);

    .colored-card {
      grid-column: span 2;
    }
  }

  &--two-one {
    grid-template-columns: repeat(2, 1fr);

    .colored-card {
      grid-column: span 2;

      &--1, &--2, {
        grid-column: span 1;
      }
    }
  }

  &--two-two {
    grid-template-columns: repeat(2, 1fr);

    .colored-card {
      grid-column: span 2;

      &--1, &--2, &--3, &--4 {
        grid-column: span 1;
      }
    }
  }

  &--one-left-two-right {
    grid-template-columns: repeat(2, 1fr);

    .colored-card {
      grid-column: span 2;

      &--1, {
        grid-column: span 1;
        grid-row: span 2;
      }

      &--2, &--3 {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  }

  &--one-left-two-right,
  &--two-two,
  &--two-one {
    @media screen and (max-width: 820px) {
      grid-template-columns: repeat(2, 1fr);

      .colored-card {
        grid-column: span 2;
      }
    }
  }
}
</style>

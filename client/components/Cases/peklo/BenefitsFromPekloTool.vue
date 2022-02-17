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
import ColoredCards from '@/components/Cases/shared/ColoredCards/ColoredCards'

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

<style lang="scss" scoped>
.case {
  &_cards {
    @include grid(repeat(1, 1fr), auto, 0, 24px);
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_card-title {
    color: $text-color--white;
  }

  &_card-img {
    min-width: 396px;
    margin: -32px 0 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 768px) {
      margin: -20px 0 0;
    }

    @media screen and (min-width: 470px) and (max-width: 720px) {
      min-width: 550px
    }
  }

  @media screen and (max-width: 720px) {
    &_cards-group {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }
}
</style>
